// ==========================================================================
// HUSSAIN AFROZ KHAN — PORTFOLIO CLIENT LOGIC
// Identity Kit / Engineering Telemetry Interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile nav when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Navigation Active State on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

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
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // 3. Email Copy to Clipboard Functionality
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const userEmail = 'khanhussainafroz@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(userEmail);
        showToast('✓ Email copied to clipboard: ' + userEmail);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = userEmail;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✓ Email copied to clipboard: ' + userEmail);
      }
    });
  }

  // 4. Contact Form Transmission Feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<span>TRANSMITTING...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ DISPATCH CONFIRMED</span>';
        showToast('✓ Transmission dispatched successfully. Thank you!');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3500);
      }, 700);
    });
  }

  // 5. System Clock & Timestamp Telemetry
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

// Toast notification helper
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
