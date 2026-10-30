// Behaviour for the line diagram. Everything here is an enhancement: without it the page is
// complete and static.

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Places the "you are here" marker's rail so its pin runs from the first station to the
// terminus. The marker is CSS-sticky inside the rail, so it rides the line with no scroll
// handler. It rides with reduced motion too: it moves 1:1 with the visitor's own scrolling, like
// a sticky header, and nothing animates. Without JS the static pin on the first station shows.
function placeRail() {
  const main = document.querySelector<HTMLElement>('main');
  const rail = document.querySelector<HTMLElement>('[data-rail]');
  const start = document.querySelector('[data-route-start]');
  const end = document.querySelector('[data-route-end]');
  if (!main || !rail || !start || !end) return;
  const marker = rail.firstElementChild as HTMLElement | null;
  const pin = rail.querySelector<HTMLElement>('.here-pin__dot');
  if (!marker || !pin) return;

  const update = () => {
    if (rail.hidden) return;
    const box = main.getBoundingClientRect();
    const from = start.getBoundingClientRect();
    const to = end.getBoundingClientRect();
    const pinSize = pin.getBoundingClientRect().height;
    const below = marker.getBoundingClientRect().height - pinSize / 2;
    const top = from.top + from.height / 2 - box.top - pinSize / 2;
    const bottom = to.top + to.height / 2 - box.top + below;
    rail.style.left = `${from.left + from.width / 2 - box.left}px`;
    rail.style.top = `${top}px`;
    rail.style.height = `${Math.max(0, bottom - top)}px`;
    // Ride at the middle of the viewport, unless the first station starts higher than that.
    const startCentre = from.top + from.height / 2 + scrollY;
    rail.style.setProperty('--ride', `${Math.min(innerHeight / 2, startCentre)}px`);
  };

  rail.hidden = false;
  document.documentElement.classList.add('has-rail');
  update();
  new ResizeObserver(update).observe(main);
  addEventListener('resize', update);
  document.fonts?.ready.then(update);
}

// Where CSS scroll-driven animations aren't supported, light each station as it passes the
// middle of the viewport (where the marker rides).
function lightStationsFallback() {
  if (CSS.supports('animation-timeline: view()')) return;
  const dots = [...document.querySelectorAll<HTMLElement>('[data-lights]')];
  if (dots.length === 0) return;

  let queued = false;
  const check = () => {
    queued = false;
    const middle = innerHeight / 2;
    for (const dot of dots) {
      const { top, height } = dot.getBoundingClientRect();
      dot.classList.toggle('is-reached', top + height / 2 <= middle);
    }
  };
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(check);
  };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  check();
}

// Fills the strip's stop for the section the visitor is in.
function markStripStop() {
  const stops = new Map(
    [...document.querySelectorAll<HTMLElement>('.strip [data-stop]')].map((stop) => [stop.dataset.stop, stop]),
  );
  const sections = [...stops.keys()]
    .map((id) => (id ? document.getElementById(id) : null))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const [id, stop] of stops) stop.toggleAttribute('data-here', id === entry.target.id);
      }
    },
    { rootMargin: '-50% 0px -50% 0px' },
  );
  for (const section of sections) observer.observe(section);
}

// Isolate a track: a Stack bullet lights every Experience and Project that used it and dims
// the rest. Pressing it again, the sign's Clear button or Escape puts everything back.
function isolateTracks() {
  const bullets = [...document.querySelectorAll<HTMLButtonElement>('button[data-track]')];
  if (bullets.length === 0) return;
  const stops = [...document.querySelectorAll<HTMLElement>('[data-tracks]')];
  const sign = document.querySelector<HTMLElement>('[data-track-sign]');
  const signText = document.querySelector<HTMLElement>('[data-track-sign-text]');
  const status = document.querySelector<HTMLElement>('[data-track-status]');
  const clear = document.querySelector<HTMLButtonElement>('[data-track-clear]');

  let active: string | null = null;
  let lastBullet: HTMLButtonElement | null = null;

  const show = (bullet: HTMLButtonElement | null) => {
    active = bullet?.dataset.track ?? null;
    for (const other of bullets) other.setAttribute('aria-pressed', String(active !== null && other.dataset.track === active));

    let lit = 0;
    for (const stop of stops) {
      const on = active !== null && (stop.dataset.tracks ?? '').split('|').includes(active);
      stop.toggleAttribute('data-on-track', on);
      if (on) lit += 1;
    }

    if (!bullet || active === null) {
      document.body.removeAttribute('data-isolating');
      if (sign) sign.hidden = true;
      if (status) status.textContent = 'Showing every stop.';
      return;
    }

    lastBullet = bullet;
    document.body.setAttribute('data-isolating', '');
    document.body.style.setProperty('--track', bullet.style.getPropertyValue('--bullet'));
    const text = `${bullet.dataset.label}: ${lit} ${lit === 1 ? 'stop' : 'stops'}`;
    if (signText) signText.textContent = text;
    if (sign) sign.hidden = false;
    if (status) status.textContent = `${text} lit. Press Escape to clear.`;
  };

  document.addEventListener('click', (event) => {
    const bullet = (event.target as Element | null)?.closest<HTMLButtonElement>('button[data-track]');
    if (!bullet) return;
    show(bullet.dataset.track === active ? null : bullet);
  });

  clear?.addEventListener('click', () => {
    show(null);
    lastBullet?.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || active === null) return;
    show(null);
  });
}

placeRail();
if (!reducedMotion.matches) lightStationsFallback();
markStripStop();
isolateTracks();
