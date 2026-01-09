// anim-helper.js — MyOS v10.0
// Chỉ dùng transform + opacity, rAF, promote/demote đúng chuẩn

const IOS_EASE = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

export function popIn(el, opts = {}) {
  const duration = opts.duration || 220;

  // Promote layer
  el.style.willChange = 'transform, opacity';

  // Initial state (compositor-only)
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px) scale(0.98)';
  el.style.transition = 'none';

  requestAnimationFrame(() => {
    el.style.transition = `
      transform ${duration}ms ${IOS_EASE},
      opacity ${duration}ms ${IOS_EASE}
    `;

    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
  });

  // Demote after animation
  setTimeout(() => {
    el.style.willChange = 'auto';
  }, duration + 50);
}
