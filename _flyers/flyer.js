// Íconos y logo compartidos por los flyers. Cada <i class="ic" data-i="nombre"> se
// reemplaza por su SVG (trazo = currentColor) y <div data-logo> por el logo de Total System.
(function () {
  const P = {
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3.2"/><path d="M3.5 10h17M8 3v4M16 3v4"/><circle cx="8.5" cy="14.5" r=".9" fill="currentColor"/><circle cx="12" cy="14.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="14.5" r=".9" fill="currentColor"/>',
    wallet: '<path d="M4.5 7.5A2.5 2.5 0 0 1 7 5h10.5A1.5 1.5 0 0 1 19 6.5V8"/><rect x="3" y="8" width="18" height="12" rx="3.2"/><circle cx="16.6" cy="14" r="1.4" fill="currentColor"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M12 6.8v10.4M14.9 9.4c-.4-1-1.5-1.6-2.9-1.6-1.6 0-2.9.8-2.9 2.1s1.2 1.8 2.9 2.2 2.9.9 2.9 2.2-1.3 2.1-2.9 2.1c-1.4 0-2.5-.6-3-1.7"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m7.9 12.6 2.9 2.9 5.5-6"/>',
    tick: '<path d="m5 12.6 4.6 4.6L19 7.4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2.1"/>',
    users: '<circle cx="9" cy="8.5" r="3.6"/><path d="M2.5 20c.6-3.7 3.2-5.6 6.5-5.6s5.9 1.9 6.5 5.6"/><circle cx="17.6" cy="9.4" r="2.7"/><path d="M17.8 14.4c2.3.1 3.8 1.6 4.2 4.6"/>',
    user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20.5c.8-4 3.6-6 7.5-6s6.7 2 7.5 6"/>',
    scissors: '<circle cx="6" cy="6.6" r="3"/><circle cx="6" cy="17.4" r="3"/><path d="M8.3 8.7 20 18M8.3 15.3 20 6"/>',
    qr: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><path d="M14 14h3.2v3.2M20.5 14v.6M14 20.5h3.2M20.5 17.6v2.9"/>',
    car: '<path d="M4.5 15.5V12l1.9-4.6A2 2 0 0 1 8.3 6h7.4a2 2 0 0 1 1.9 1.4L19.5 12v3.5"/><rect x="3" y="12" width="18" height="5.5" rx="2"/><circle cx="7.5" cy="14.8" r=".9" fill="currentColor"/><circle cx="16.5" cy="14.8" r=".9" fill="currentColor"/><path d="M6 17.5v2M18 17.5v2"/>',
    drop: '<path d="M12 3.2c3.6 4.3 6.2 7.3 6.2 10.5a6.2 6.2 0 0 1-12.4 0c0-3.2 2.6-6.2 6.2-10.5Z"/>',
    dumbbell: '<path d="M6.6 6.5v11M17.4 6.5v11M3.4 9.3v5.4M20.6 9.3v5.4M6.6 12h10.8"/>',
    camera: '<path d="M3.8 8.6A2.6 2.6 0 0 1 6.4 6H8l1.3-2h5.4L16 6h1.6a2.6 2.6 0 0 1 2.6 2.6v7.8a2.6 2.6 0 0 1-2.6 2.6H6.4a2.6 2.6 0 0 1-2.6-2.6Z"/><circle cx="12" cy="12.4" r="3.7"/>',
    chat: '<path d="M20.5 11.4c0 3.7-3.7 6.6-8.2 6.6-.9 0-1.8-.1-2.6-.4L5 19.6l1.3-3.5C4.8 15 3.9 13.3 3.9 11.4 3.9 7.7 7.7 4.8 12.2 4.8s8.3 2.9 8.3 6.6Z"/>',
    star: '<path d="m12 3.4 2.7 5.4 6 .9-4.4 4.2 1 5.9L12 17l-5.3 2.8 1-5.9-4.4-4.2 6-.9Z"/>',
    trophy: '<path d="M8 4h8v5.2a4 4 0 0 1-8 0Z"/><path d="M8 6.2H4.4c0 3 1.6 4.6 3.9 4.9M16 6.2h3.6c0 3-1.6 4.6-3.9 4.9M12 13.4V17M8.6 20.4h6.8M9.6 17h4.8"/>',
    chart: '<path d="M4 4.5V20h16"/><path d="m7.6 15.2 3.5-4.2 3 2.6 4.6-6"/>',
    percent: '<path d="M18.6 5.4 5.4 18.6"/><circle cx="7.6" cy="7.6" r="2.6"/><circle cx="16.4" cy="16.4" r="2.6"/>',
    receipt: '<path d="M6 3.5h12v17l-2.4-1.6-2.1 1.6-1.5-1.6-1.5 1.6-2.1-1.6L6 20.5Z"/><path d="M9 8.5h6M9 12h6M9 15.5h3.4"/>',
    utensils: '<path d="M7.2 3.5V11M4.6 3.5v5.4a2.6 2.6 0 0 0 5.2 0V3.5M7.2 11v9.5M17.2 20.5V3.5c-2.4 1.2-3.6 3.6-3.6 6.6 0 2 1.1 3 3.6 3.2"/>',
    award: '<circle cx="12" cy="9" r="5.6"/><path d="m8.7 13.7-1.4 6.8 4.7-2 4.7 2-1.4-6.8"/>',
    sparkle: '<path fill="currentColor" stroke="none" d="M12 2c.7 4.9 2.3 7.5 8 10-5.7 2.5-7.3 5.1-8 10-.7-4.9-2.3-7.5-8-10 5.7-2.5 7.3-5.1 8-10Z"/>',
    book: '<path d="M4.5 5.6A2.1 2.1 0 0 1 6.6 3.5H19.5v15H6.6a2.1 2.1 0 0 0-2.1 2.1Z"/><path d="M4.5 5.6v15M8.6 8h7"/>',
    home: '<path d="M4 11.2 12 4l8 7.2v8.3a1 1 0 0 1-1 1h-4.4V15H9.4v5.5H5a1 1 0 0 1-1-1Z"/>',
    columns: '<rect x="3.5" y="4" width="5.2" height="16" rx="1.6"/><rect x="9.9" y="4" width="5.2" height="10" rx="1.6"/><rect x="16.3" y="4" width="4.2" height="13" rx="1.6"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4Z"/><path d="M10 20.6a2.2 2.2 0 0 0 4 0"/>',
    flame: '<path d="M12.4 3c.5 3.3 4.6 5.1 4.6 9.7a5 5 0 0 1-10 0c0-2 1-3.3 2-4.3.2 1.4.9 2.2 1.7 2.5C10.3 8.4 11 5.6 12.4 3Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="m4 17.4 5-4.4 4 3.4 3-2.4 4.5 3.7"/>',
    list: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.8" cy="6.5" r="1" fill="currentColor"/><circle cx="4.8" cy="12" r="1" fill="currentColor"/><circle cx="4.8" cy="17.5" r="1" fill="currentColor"/>',
  };

  function svg(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  }

  const LOGO = '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="23" fill="#fff"/>' +
    '<text x="23" y="32.5" text-anchor="middle" font-family="Outfit, sans-serif" font-weight="800" font-size="24" fill="#1e0f26" letter-spacing="-1">ts</text>' +
    '<circle cx="39" cy="9" r="3.8" fill="#dc1672"/></svg><span>total system</span>';

  function run() {
    document.querySelectorAll('i.ic[data-i]').forEach((el) => { el.innerHTML = svg(el.dataset.i); });
    document.querySelectorAll('[data-logo]').forEach((el) => { el.innerHTML = LOGO; });
    document.documentElement.dataset.ready = '1';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
