// ==========================================================================
// HUSSAIN AFROZ KHAN — PORTFOLIO CLIENT LOGIC
// Identity Kit / Reel-Style Scroll Reveals & Telemetry
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-Triggered Card & Section Reveals (Instagram Reel Animation Style)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Optional: keep observing or unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Navigation Active State on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  });

  sections.forEach(section => sectionObserver.observe(section));

  // 4. Email Copy to Clipboard Functionality
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const userEmail = 'khanhussainafroz@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(userEmail);
        showToast('✓ Copied email: ' + userEmail);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = userEmail;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✓ Copied email: ' + userEmail);
      }
    });
  }

  // 5. Contact Form Transmission Simulation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<span>DISPATCHING TRANSMISSION...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ TRANSMISSION DELIVERED</span>';
        showToast('✓ Dispatch confirmed! Thank you for reaching out.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3200);
      }, 700);
    });
  }

  // 6. Live UTC Telemetry Clock
  function updateTelemetryEpoch() {
    const epochDisplay = document.getElementById('epochTimestamp');
    if (epochDisplay) {
      const now = new Date();
      const utcString = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      epochDisplay.textContent = utcString;
    }
  }
  updateTelemetryEpoch();
  setInterval(updateTelemetryEpoch, 1000);
});

// Helper: Toast notification popup
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
