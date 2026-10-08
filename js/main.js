/* ============================================================
   AURIS CARE — Core Engine (Vanilla JS, ES6)
   ============================================================ */

'use strict';

/* ---------- SVG icon library ---------- */
const AURIS_ICONS = {
  ear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 3-1.5 4.5-3 6s-2.5 3-2.5 5a2.5 2.5 0 0 1-5 0"/><path d="M9.5 8.5a3 3 0 0 1 6 0c0 1.5-1 2.2-2 3.2"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.2 12 3 12 3z"/><path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6.5 9H3v6h3.5L11 19V5z"/><path d="M15 9a4.2 4.2 0 0 1 0 6"/><path d="M17.5 6.5a8 8 0 0 1 0 11"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>',
  wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h3l2.5-7 4 14 3-10 2 3h5.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3z"/><path d="m9 12 2 2 4-4.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.5a3.5 3.5 0 0 1 0 6.5M17.5 14.5a6.5 6.5 0 0 1 4 5.5"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a6 6 0 1 0-12 0c0 6-2.5 7-2.5 7h17S18 15 18 9z"/><path d="M10 20a2.2 2.2 0 0 0 4 0"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.14-1.4l2-1.55-2-3.46-2.35.95a7 7 0 0 0-2.42-1.4L13.7 2.6h-3.4l-.39 2.54a7 7 0 0 0-2.42 1.4l-2.35-.95-2 3.46 2 1.55a7 7 0 0 0 0 2.8l-2 1.55 2 3.46 2.35-.95a7 7 0 0 0 2.42 1.4l.39 2.54h3.4l.39-2.54a7 7 0 0 0 2.42-1.4l2.35.95 2-3.46-2-1.55c.1-.45.14-.92.14-1.4z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"/><path d="M10 12h11M17.5 8.5 21 12l-3.5 3.5"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16v-5M12 16V8M16 16v-3M20 16V6"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2.5h8L19 8v13.5H6z"/><path d="M13.5 2.5V8H19M9 12h6M9 15.5h6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.5"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2.5 20h19L12 3z"/><path d="M12 10v4.5M12 17.5v.5"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5.5 11.5 6.5-6.5 6.5 6.5"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.5 18.5 9.5 8.5 19.5H4.5v-4l10-10z"/><path d="m12.5 7.5 4 4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13.5h9l1-13.5M10 11v6M14 11v6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.5-2 7 5.5-3 5.5 3-2-7"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5S3.5 15.5 3.5 9.3A4.6 4.6 0 0 1 8.2 4.7c1.6 0 3 .8 3.8 2a4.6 4.6 0 0 1 3.8-2 4.6 4.6 0 0 1 4.7 4.6c0 6.2-8.5 11.2-8.5 11.2z"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
  van: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6h11v10h-11zM13.5 10h4l3 3.5V16h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/><path d="M8.5 7.5h2M13.5 7.5h2M8.5 11.5h2M13.5 11.5h2M8.5 15.5h2M13.5 15.5h2M10.5 20.5v-2.5h3v2.5"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.9 7.2c-.5.3-1.1.4-1.7.5.6-.4 1.1-1 1.3-1.7-.6.3-1.2.6-1.9.7a3 3 0 0 0-5.1 2.7A8.4 8.4 0 0 1 7.4 6a3 3 0 0 0 .9 4c-.5 0-1-.2-1.4-.4a3 3 0 0 0 2.4 2.9c-.4.1-.9.2-1.4.1a3 3 0 0 0 2.8 2A6 6 0 0 1 6 16a8.5 8.5 0 0 0 4.6 1.3c5.5 0 8.5-4.5 8.5-8.5v-.4c.6-.4 1-1 1.3-1.6l-.5-.6z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.8H3.6V21h2.9V8.8zM5 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM21 13.4c0-3.2-1.7-4.7-4-4.7-1.8 0-2.7 1-3.1 1.7V8.8H11V21h2.9v-6.4c0-1.5.7-2.4 2-2.4 1.2 0 1.9.8 1.9 2.4V21H21v-7.6z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16l-1.5 12.5h-13L4 8z"/><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3 10.5 13.5M21 3l-7 18-3.5-7.5L3 10l18-7z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>',
  ban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/></svg>',
};

function aurisIcon(name) {
  return AURIS_ICONS[name] || AURIS_ICONS.info;
}

/* ---------- Theme (light/dark) ---------- */
const Theme = {
  init() {
    const saved = localStorage.getItem('auris-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    this.syncButtons(theme);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('auris-theme', next);
    this.syncButtons(next);
  },
  syncButtons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.innerHTML = aurisIcon(theme === 'dark' ? 'sun' : 'moon');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
};

/* ---------- RTL / LTR ---------- */
const Direction = {
  init() {
    const saved = localStorage.getItem('auris-dir');
    if (saved === 'rtl') document.documentElement.setAttribute('dir', 'rtl');
    this.syncButton();
  },
  toggle() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    if (isRtl) {
      document.documentElement.removeAttribute('dir');
      localStorage.setItem('auris-dir', 'ltr');
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('auris-dir', 'rtl');
    }
    this.syncButton();
  },
  syncButton() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('[data-dir-toggle]').forEach(btn => {
      btn.textContent = isRtl ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR' : 'Switch to RTL');
      btn.setAttribute('title', isRtl ? 'LTR' : 'RTL');
    });
  }
};

/* ---------- Toast notifications ---------- */
const Toast = {
  wrap: null,
  ensure() {
    if (!this.wrap) {
      this.wrap = document.createElement('div');
      this.wrap.className = 'toast-wrap';
      this.wrap.setAttribute('aria-live', 'polite');
      document.body.appendChild(this.wrap);
    }
  },
  show(title, message = '', type = 'info') {
    this.ensure();
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    const iconName = type === 'success' ? 'check' : type === 'error' ? 'warn' : 'info';
    toast.innerHTML = `<span class="toast-icon">${aurisIcon(iconName)}</span><div><b></b><p></p></div>`;
    toast.querySelector('b').textContent = title;
    toast.querySelector('p').textContent = message;
    this.wrap.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('hide');
      toast.addEventListener('animationend', () => toast.remove(), { once: true });
    }, 4200);
  }
};

/* ---------- Navbar ---------- */
const Nav = {
  init() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    /* Pages without a dark hero (light content at top) get a solid nav immediately */
    const solidTop = !document.querySelector('.hero, .page-hero');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30 || solidTop);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const burger = document.querySelector('.nav-burger');
    const menu = document.querySelector('.mobile-menu');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        menu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      }));
      const close = menu.querySelector('.mobile-menu-close');
      if (close) close.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    document.querySelectorAll('[data-theme-toggle]').forEach(b => b.addEventListener('click', () => Theme.toggle()));
    document.querySelectorAll('[data-dir-toggle]').forEach(b => b.addEventListener('click', () => Direction.toggle()));

    /* Profile dropdown (navbar-scoped only) */
    const profile = document.querySelector('.nav-profile');
    const profileBtn = document.querySelector('[data-profile-toggle]');
    if (profile && profileBtn) {
      profileBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = profile.classList.contains('open');
        document.querySelectorAll('.nav-profile.open, .nav-dropdown.open').forEach(el => el.classList.remove('open'));
        if (!isOpen) profile.classList.add('open');
        profileBtn.setAttribute('aria-expanded', String(!isOpen));
      });
      document.addEventListener('click', e => {
        if (!profile.contains(e.target)) {
          profile.classList.remove('open');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Hearing Checks dropdown: click support for touch devices (hover handled by CSS) */
    const drop = document.querySelector('.nav-dropdown');
    const dropToggle = document.querySelector('.nav-drop-toggle');
    if (drop && dropToggle) {
      dropToggle.addEventListener('click', e => {
        if (window.matchMedia('(hover: none)').matches) e.preventDefault();
        e.stopPropagation();
        const isOpen = drop.classList.contains('open');
        document.querySelectorAll('.nav-profile.open, .nav-dropdown.open').forEach(el => el.classList.remove('open'));
        if (!isOpen) drop.classList.add('open');
      });
      document.addEventListener('click', e => {
        if (!drop.contains(e.target)) drop.classList.remove('open');
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.nav-profile.open, .nav-dropdown.open').forEach(el => el.classList.remove('open'));
      }
    });
  },
  markActive() {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-drop-menu a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path) a.classList.add('active');
    });
    /* Keep parent highlighted when Treatment Process is active */
    if (path === 'treatment-process.html') {
      const parent = document.querySelector('.nav-drop-toggle');
      if (parent) parent.classList.add('active');
    }
  }
};

/* ---------- Scroll reveal ---------- */
const Reveal = {
  init() {
    document.documentElement.classList.add('js');
    const els = document.querySelectorAll('.reveal, .stagger');
    if (!els.length) return;

    const revealEl = el => {
      el.classList.add('revealed');
      if (el.classList.contains('stagger')) {
        el.querySelectorAll(':scope > *').forEach(child => child.classList.add('revealed'));
      }
    };

    if (!('IntersectionObserver' in window)) {
      els.forEach(revealEl);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealEl(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => io.observe(el));

    setTimeout(() => els.forEach(el => { if (!el.classList.contains('revealed')) revealEl(el); }), 2500);
  }
};

/* ---------- Animated counters ---------- */
const Counters = {
  init() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split('.')[1] || '').length;
        const dur = 1800;
        const start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }
};

/* ---------- Accordion ---------- */
const Accordion = {
  init() {
    document.querySelectorAll('.acc-head').forEach(head => {
      head.addEventListener('click', () => {
        const item = head.closest('.acc-item');
        const body = item.querySelector('.acc-body');
        const isOpen = item.classList.contains('open');
        const group = item.closest('.accordion');
        if (group && group.dataset.single !== 'false') {
          group.querySelectorAll('.acc-item.open').forEach(other => {
            if (other !== item) {
              other.classList.remove('open');
              other.querySelector('.acc-body').style.maxHeight = null;
            }
          });
        }
        if (isOpen) {
          item.classList.remove('open');
          body.style.maxHeight = null;
        } else {
          item.classList.add('open');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }
};

/* ---------- Hero slider ---------- */
const HeroSlider = {
  init() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const slides = hero.querySelectorAll('.hero-slide');
    const dots = hero.querySelectorAll('.hero-dot');
    let idx = 0, timer;

    const go = n => {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    };
    const auto = () => { clearInterval(timer); timer = setInterval(() => go(idx + 1), 6500); };

    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); auto(); }));
    const prev = hero.querySelector('.hero-arrow--prev');
    const next = hero.querySelector('.hero-arrow--next');
    if (prev) prev.addEventListener('click', () => { go(idx - 1); auto(); });
    if (next) next.addEventListener('click', () => { go(idx + 1); auto(); });

    let touchX = null;
    hero.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) { go(idx + (dx < 0 ? 1 : -1)); auto(); }
      touchX = null;
    }, { passive: true });

    auto();
  }
};

/* ---------- Back to top ---------- */
const BackToTop = {
  init() {
    const btn = document.querySelector('.to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 600), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
};

/* ---------- Form validation ---------- */
const Forms = {
  init() {
    document.querySelectorAll('form[data-validate]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('[required], [data-pattern]').forEach(field => {
          const wrap = field.closest('.field');
          let ok = field.value.trim().length > 0;
          if (ok && field.dataset.pattern === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim());
          if (ok && field.dataset.pattern === 'phone') ok = /^[+\d][\d\s\-()]{6,}$/.test(field.value.trim());
          if (ok && field.dataset.pattern === 'tel') ok = true;
          if (ok && field.type === 'checkbox' && field.dataset.required) ok = field.checked;
          if (wrap) wrap.classList.toggle('has-error', !ok);
          if (!ok) valid = false;
        });
        if (!valid) {
          Toast.show('Please review the form', 'Some required fields need your attention.', 'error');
          const firstError = form.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
          if (firstError) firstError.focus();
          return;
        }
        const success = form.querySelector('.form-success');
        if (success) {
          success.classList.add('show');
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        Toast.show('Submitted successfully', 'We will be in touch shortly.', 'success');
        form.reset();
        form.querySelectorAll('.field').forEach(f => f.classList.remove('has-error'));
        const overlay = form.closest('.modal-overlay');
        if (overlay) setTimeout(() => {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
          if (success) success.classList.remove('show');
        }, 1600);
      });
      form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => field.closest('.field')?.classList.remove('has-error'));
      });
    });
  }
};

/* ---------- Booking widget ---------- */
const Booking = {
  state: { service: null, visitType: null, practitioner: null, date: null, time: null, name: '', email: '', phone: '', notes: '' },
  step: 1,
  totalSteps: 5,

  init() {
    document.querySelectorAll('[data-booking]').forEach(widget => {
      this.state = { service: null, visitType: null, practitioner: null, date: null, time: null, name: '', email: '', phone: '', notes: '' };
      this.step = 1;
      /* Flow steps = all steps except the final success screen (widgets may have extra steps, e.g. practitioner) */
      this.totalSteps = widget.querySelectorAll('.booking-step:not(.booking-step--done)').length || 5;
      this.renderSteps(widget);
      this.bindStep1(widget);
      this.bindStep2(widget);
      this.bindStep3(widget);
      this.bindStep4(widget);
      this.bindNav(widget);
    });
  },

  renderSteps(widget) {
    const steps = widget.querySelectorAll('.booking-step');
    steps.forEach((s, i) => s.classList.toggle('active', i + 1 === this.step));
    const segs = widget.querySelectorAll('.bp-seg');
    segs.forEach((seg, i) => seg.classList.toggle('done', i < this.step));
    const summary = widget.querySelector('.booking-summary');
    if (summary) this.renderSummary(widget);
    const stepNum = widget.querySelector('.bk-step-num');
    if (stepNum) stepNum.textContent = this.step;
    const stepTotal = widget.querySelector('.bk-step-total');
    if (stepTotal) stepTotal.textContent = this.totalSteps;
    const next = widget.querySelector('.bk-next');
    if (next) {
      const label = this.step === this.totalSteps ? 'Confirm Booking' : 'Continue';
      next.innerHTML = `${label} <span class="btn-arrow">${aurisIcon('arrow')}</span>`;
    }
    const nav = widget.querySelector('.booking-nav');
    if (nav) nav.style.display = '';
  },

  renderSummary(widget) {
    const s = this.state;
    const svc = AURIS_SERVICES.find(x => x.id === s.service);
    const prac = AURIS_PRACTITIONERS.find(x => x.id === s.practitioner);
    const rows = [
      ['Service', svc ? svc.name : '—'],
      ['Visit type', s.visitType === 'home' ? 'Mobile home visit' : s.visitType === 'clinic' ? 'Clinic appointment' : '—'],
      ['Practitioner', prac ? prac.name : 'First available'],
      ['Date', s.date || '—'],
      ['Time', s.time || '—'],
    ];
    const total = svc ? svc.price + (s.visitType === 'home' ? 30 : 0) : 0;
    widget.querySelectorAll('.bs-row[data-key]').forEach(row => {
      const key = row.dataset.key;
      const val = rows.find(r => r[0].toLowerCase() === key);
      if (val) row.querySelector('b').textContent = val[1];
    });
    const totalEl = widget.querySelector('.bs-total b');
    if (totalEl) totalEl.textContent = total ? `£${total}.00` : '—';
  },

  bindStep1(widget) {
    widget.querySelectorAll('[data-select-service]').forEach(card => {
      card.addEventListener('click', () => {
        widget.querySelectorAll('[data-select-service]').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.state.service = card.dataset.selectService;
        this.renderSummary(widget);
      });
    });
  },

  bindStep2(widget) {
    widget.querySelectorAll('[data-select-visit]').forEach(card => {
      card.addEventListener('click', () => {
        widget.querySelectorAll('[data-select-visit]').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.state.visitType = card.dataset.selectVisit;
        this.renderSummary(widget);
      });
    });
  },

  bindStep3(widget) {
    const pracCards = widget.querySelectorAll('[data-select-prac]');
    pracCards.forEach(card => {
      card.addEventListener('click', () => {
        pracCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.state.practitioner = card.dataset.selectPrac;
        this.renderSummary(widget);
      });
    });
    const dateStrip = widget.querySelector('.date-strip');
    if (dateStrip && !dateStrip.dataset.built) {
      dateStrip.dataset.built = '1';
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      for (let i = 1; i <= 14; i++) {
        const d = new Date(); d.setDate(d.getDate() + i);
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'date-chip';
        chip.innerHTML = `<b>${d.getDate()}</b><span>${days[d.getDay()]} ${months[d.getMonth()]}</span>`;
        chip.addEventListener('click', () => {
          dateStrip.querySelectorAll('.date-chip').forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
          this.state.date = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
          this.renderSummary(widget);
        });
        dateStrip.appendChild(chip);
      }
    }
    const slotGrid = widget.querySelector('.slot-grid');
    if (slotGrid && !slotGrid.dataset.built) {
      slotGrid.dataset.built = '1';
      AURIS_TIME_SLOTS.forEach((t, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'slot-btn';
        btn.textContent = t;
        if (i % 4 === 3) btn.disabled = true;
        btn.addEventListener('click', () => {
          slotGrid.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          this.state.time = t;
          this.renderSummary(widget);
        });
        slotGrid.appendChild(btn);
      });
    }
  },

  bindStep4(widget) {
    const map = { 'bk-name': 'name', 'bk-email': 'email', 'bk-phone': 'phone', 'bk-notes': 'notes' };
    Object.entries(map).forEach(([id, key]) => {
      const input = widget.querySelector(`#${id}`);
      if (input) input.addEventListener('input', () => { this.state[key] = input.value; });
    });
  },

  bindNav(widget) {
    const back = widget.querySelector('.bk-back');
    const next = widget.querySelector('.bk-next');
    if (back) back.addEventListener('click', () => { if (this.step > 1) { this.step--; this.renderSteps(widget); } });
    if (next) next.addEventListener('click', () => {
      if (this.step < this.totalSteps) {
        /* Validate based on what the CURRENT step actually contains (widgets have different step orders) */
        const active = widget.querySelector('.booking-step.active');
        if (active) {
          if (active.querySelector('[data-select-service]') && !this.state.service) return Toast.show('Select a service', 'Please choose a treatment to continue.', 'error');
          if (active.querySelector('[data-select-visit]') && !this.state.visitType) return Toast.show('Select visit type', 'Please choose home or clinic visit.', 'error');
          if (active.querySelector('.date-strip') && (!this.state.date || !this.state.time)) return Toast.show('Pick a time', 'Please select a date and time slot.', 'error');
          if (active.querySelector('#bk-name')) {
            const name = widget.querySelector('#bk-name'), email = widget.querySelector('#bk-email'), phone = widget.querySelector('#bk-phone');
            if (!name.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) || !phone.value.trim()) {
              return Toast.show('Almost there', 'Please complete your name, a valid email and phone number.', 'error');
            }
          }
        }
        this.step++;
        this.renderSteps(widget);
      } else {
        const ref = 'AC-' + Date.now().toString(36).toUpperCase();
        Toast.show('Appointment confirmed', `Reference ${ref} — confirmation sent to your email.`, 'success');
        widget.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
        const done = widget.querySelector('.booking-step--done');
        if (done) {
          done.classList.add('active');
          done.querySelector('.bk-ref').textContent = ref;
        }
        const nav = widget.querySelector('.booking-nav');
        if (nav) nav.style.display = 'none';
        this.step = 1;
        setTimeout(() => {
          this.state = { service: null, visitType: null, practitioner: null, date: null, time: null, name: '', email: '', phone: '', notes: '' };
          widget.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
          widget.querySelectorAll('#bk-name, #bk-email, #bk-phone, #bk-notes').forEach(i => (i.value = ''));
          this.renderSteps(widget);
        }, 6000);
      }
    });
  }
};

/* ---------- Service filters ---------- */
const Filters = {
  init() {
    document.querySelectorAll('[data-filter-group]').forEach(group => {
      const pills = group.querySelectorAll('.filter-pill');
      const items = [];
      document.querySelectorAll(group.dataset.filterGroup).forEach(container => {
        container.querySelectorAll('[data-category]').forEach(item => items.push(item));
      });
      const scope = group.parentElement;
      const empty = scope ? scope.querySelector('.filter-empty') : null;
      if (empty) {
        empty.hidden = true;
        const reset = empty.querySelector('[data-filter-reset]');
        if (reset) reset.addEventListener('click', () => {
          const all = group.querySelector('[data-filter="all"]');
          if (all) all.click();
        });
      }
      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          pills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const cat = pill.dataset.filter;
          let visible = 0;
          items.forEach(item => {
            const show = cat === 'all' || item.dataset.category === cat;
            item.style.display = show ? '' : 'none';
            if (show) { visible++; item.classList.remove('revealed'); void item.offsetWidth; item.classList.add('revealed'); }
          });
          if (empty) empty.hidden = visible > 0;
        });
      });
    });
  }
};

/* ---------- Modal ---------- */
const Modal = {
  init() {
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        const overlay = document.querySelector(btn.dataset.modalOpen);
        if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
      });
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay || e.target.closest('.modal-close')) {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
        document.body.style.overflow = '';
      }
    });
  }
};

/* ---------- Countdown (coming soon) ---------- */
const Countdown = {
  init() {
    const wrap = document.querySelector('[data-countdown]');
    if (!wrap) return;
    const target = new Date();
    target.setDate(target.getDate() + 12); target.setHours(9, 0, 0, 0);
    const cells = wrap.querySelectorAll('.cd-cell b');
    const tick = () => {
      const diff = Math.max(0, target - new Date());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor(diff / 3600000) % 24;
      const m = Math.floor(diff / 60000) % 60;
      const s = Math.floor(diff / 1000) % 60;
      const vals = [d, h, m, s];
      cells.forEach((c, i) => { if (c) c.textContent = String(vals[i]).padStart(2, '0'); });
    };
    tick();
    setInterval(tick, 1000);
  }
};

/* ---------- Dashboard ---------- */
const Dashboard = {
  init() {
    document.querySelectorAll('[data-dash-nav]').forEach(nav => {
      nav.querySelectorAll('button[data-panel]').forEach(btn => {
        btn.addEventListener('click', () => {
          nav.querySelectorAll('button[data-panel]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const dash = nav.closest('.dash');
          dash.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
          const panel = dash.querySelector(`#panel-${btn.dataset.panel}`);
          if (panel) panel.classList.add('active');
        });
      });
    });
    document.querySelectorAll('[data-confirm-cancel]').forEach(btn => {
      btn.addEventListener('click', () => {
        Toast.show('Appointment cancelled', 'A confirmation email has been sent. You can rebook anytime.', 'success');
        btn.closest('.appt-item')?.remove();
      });
    });
    document.querySelectorAll('[data-reschedule]').forEach(btn => {
      btn.addEventListener('click', () => {
        Toast.show('Reschedule requested', 'Choose a new slot from your upcoming appointments.', 'info');
        const dash = btn.closest('.dash');
        const navBtn = dash?.querySelector('button[data-panel="appointments"]');
        navBtn?.click();
      });
    });
    document.querySelectorAll('.chart-bar .cb-fill').forEach(bar => {
      const h = bar.style.height;
      bar.style.height = '0px';
      requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.height = h; }));
    });
  }
};

/* ---------- Auth (login / signup) ---------- */
const Auth = {
  init() {
    document.querySelectorAll('[data-auth-submit]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const form = btn.closest('form');
        if (!form) return;
        let valid = true;
        form.querySelectorAll('[required]').forEach(field => {
          const wrap = field.closest('.field');
          let ok = field.value.trim().length > 0;
          if (ok && field.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim());
          if (ok && field.dataset.min) ok = field.value.trim().length >= parseInt(field.dataset.min);
          if (wrap) wrap.classList.toggle('has-error', !ok);
          if (!ok) valid = false;
        });
        const pw = form.querySelector('#auth-password');
        const pw2 = form.querySelector('#auth-password-2');
        if (pw && pw2 && pw.value !== pw2.value) {
          pw2.closest('.field')?.classList.add('has-error');
          valid = false;
          Toast.show('Passwords do not match', 'Please re-enter your password.', 'error');
        }
        if (!valid) return;
        const isSignup = btn.dataset.authSubmit === 'signup';
        Toast.show(isSignup ? 'Account created' : 'Welcome back', isSignup ? 'Please check your email to verify your account.' : 'Signing you in…', 'success');
        setTimeout(() => { location.href = 'patient-dashboard.html'; }, 1400);
      });
    });
    document.querySelectorAll('.pw-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = document.querySelector(btn.dataset.pwToggle);
        if (!input) return;
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.innerHTML = aurisIcon(show ? 'eye' : 'lock');
      });
    });
  }
};

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const inits = [
    ['Theme', () => Theme.init()],
    ['Direction', () => Direction.init()],
    ['Nav', () => { Nav.init(); Nav.markActive(); }],
    ['Reveal', () => Reveal.init()],
    ['Counters', () => Counters.init()],
    ['Accordion', () => Accordion.init()],
    ['HeroSlider', () => HeroSlider.init()],
    ['BackToTop', () => BackToTop.init()],
    ['Forms', () => Forms.init()],
    ['Booking', () => Booking.init()],
    ['Filters', () => Filters.init()],
    ['Modal', () => Modal.init()],
    ['Countdown', () => Countdown.init()],
    ['Dashboard', () => Dashboard.init()],
    ['Auth', () => Auth.init()],
  ];
  inits.forEach(([name, fn]) => {
    try { fn(); } catch (err) { console.error(`[Auris] ${name} init failed:`, err); }
  });
});
