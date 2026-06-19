// ============================================
// Eu Não Estou Bem - Enhanced Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // === ENHANCED COUNTDOWN ===
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    let total = 4 * 60 + 56;
    let interval = null;

    function tick() {
      if (total <= 0) {
        countdownEl.textContent = '00:00';
        if (interval) clearInterval(interval);
        return;
      }

      const min = Math.floor(total / 60);
      const sec = total % 60;
      countdownEl.textContent = 
        String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');

      // Urgency effect
      const timerContainer = countdownEl.closest('.timer');
      if (timerContainer && total < 120) {
        timerContainer.classList.add('low-time');
      }

      total--;
    }

    tick();
    interval = setInterval(tick, 1000);
  }

  // === BOOK TILT EFFECT (3D) ===
  const bookWrap = document.querySelector('.book-wrap');
  const book = document.querySelector('.mock-book, .book-cover');

  if (bookWrap && book && !prefersReduced) {
    let isHovering = false;

    bookWrap.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    bookWrap.addEventListener('mouseleave', () => {
      isHovering = false;
      // Reset
      book.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      book.style.boxShadow = 'var(--shadow)';
    });

    bookWrap.addEventListener('mousemove', (e) => {
      if (!isHovering || prefersReduced) return;

      const rect = bookWrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;   // -0.5 to 0.5
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;

      const rotateX = y * -18; // vertical tilt
      const rotateY = x * 22;  // horizontal tilt

      book.style.transition = 'transform 0.1s ease';
      book.style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

      // Dynamic shadow for depth
      const shadowX = x * 30;
      const shadowY = y * 30;
      book.style.boxShadow = 
        `${shadowX}px ${shadowY + 18}px 55px rgba(0,0,0,.6)`;
    });

    // Touch support (simple tilt)
    bookWrap.addEventListener('touchmove', (e) => {
      if (prefersReduced) return;
      const rect = bookWrap.getBoundingClientRect();
      const touch = e.touches[0];
      const x = ((touch.clientX - rect.left) / rect.width) - 0.5;
      const y = ((touch.clientY - rect.top) / rect.height) - 0.5;

      const rotateX = y * -12;
      const rotateY = x * 16;
      book.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, { passive: true });
  }

  // === SCROLL REVEAL ANIMATIONS ===
  if (!prefersReduced) {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger effect
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Make sure everything is visible
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // === STICKY CTA FOR MOBILE ===
  const stickyContainer = document.getElementById('sticky-cta');
  if (stickyContainer) {
    // Show after user scrolls a bit
    let shown = false;
    window.addEventListener('scroll', () => {
      if (!shown && window.scrollY > 400) {
        stickyContainer.style.display = 'block';
        shown = true;
      }
    }, { passive: true });

    // Hide when near bottom (user is at final warning)
    const finalSection = document.getElementById('checkout');
    if (finalSection) {
      const finalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stickyContainer.style.display = 'none';
          }
        });
      }, { threshold: 0.5 });
      finalObserver.observe(finalSection);
    }
  }

  // === ENHANCED CTA TRACKING READY ===
  // Add data attributes already in HTML for analytics
  const ctas = document.querySelectorAll('.cta');
  ctas.forEach((cta, i) => {
    if (!cta.dataset.cta) {
      cta.dataset.cta = i === 0 ? 'trecho' : 'oferta';
    }
  });

  // === OPTIONAL: Click ripple on CTAs (subtle) ===
  ctas.forEach(cta => {
    cta.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      circle.style.background = 'rgba(255,255,255,0.3)';
      circle.style.left = `${e.offsetX - diameter/2}px`;
      circle.style.top = `${e.offsetY - diameter/2}px`;
      circle.style.pointerEvents = 'none';
      circle.style.transform = 'scale(0)';
      circle.style.transition = 'transform 0.5s ease-out, opacity 0.5s';

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(circle);

      setTimeout(() => {
        circle.style.transform = 'scale(2.5)';
        circle.style.opacity = '0';
      }, 10);

      setTimeout(() => circle.remove(), 550);
    });
  });

  // === META PIXEL - VIEW CONTENT (after 5 seconds) ===
  // Fires once when the user stays on the site for 5+ seconds.
  // This is useful for Meta to understand engaged visitors.
  let viewContentFired = false;

  setTimeout(() => {
    if (!viewContentFired && typeof fbq === 'function') {
      fbq('track', 'ViewContent', {
        content_name: 'Eu Não Estou Bem',
        content_category: 'Livro Digital',
        content_type: 'product',
        content_ids: ['eunaoestoubem-livro'],
        value: 17.00,
        currency: 'BRL'
      });
      viewContentFired = true;
    }
  }, 5000); // 5 seconds delay


  // Production: removed console log for smaller JS

  // === Elegant list stagger enhancement (for symptoms) ===
  const symptomsSection = document.querySelector('.symptoms');
  if (symptomsSection && !prefersReduced) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Force the staggered p animations to run
          symptomsSection.querySelectorAll('p').forEach((p, i) => {
            p.style.animation = `elegant-stagger 0.7s ${0.1 + i * 0.15}s forwards`;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    observer.observe(symptomsSection);
  }

  // Subtle idle reflection on book (elegant continuous effect)
  const mockBookIdle = document.querySelector('.mock-book');
  if (mockBookIdle && !prefersReduced) {
    // Add very slow moving light sweep
    setTimeout(() => {
      mockBookIdle.style.transition = 'box-shadow 4s ease-in-out';
    }, 1200);
  }

  // === Elegant periodic attention pulse on the main buy button ===
  const primaryCta = document.querySelector('.cta-primary');
  if (primaryCta && !prefersReduced) {
    // Every ~11 seconds, give a very elegant extra pulse (only if not hovered)
    setInterval(() => {
      if (!primaryCta.matches(':hover')) {
        primaryCta.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
        primaryCta.style.transform = 'scale(1.025)';
        primaryCta.style.boxShadow = '0 22px 55px rgba(242, 201, 76, .32), 0 0 0 12px rgba(242, 201, 76, 0.15)';

        setTimeout(() => {
          if (!primaryCta.matches(':hover')) {
            primaryCta.style.transform = '';
            primaryCta.style.boxShadow = '';
          }
        }, 900);
      }
    }, 11000);
  }
});
