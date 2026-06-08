function initPortfolio() {

  /* ==========================================
     1. STICKY HEADER & MOBILE NAV
     ========================================== */
  const header = document.querySelector('.header');
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle && navToggle.classList.contains('active') && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  /* ==========================================
     2. SCROLL REVEAL & ACTIVE SECTION LINK
     ========================================== */
  const sections = document.querySelectorAll('section');
  const revealElements = document.querySelectorAll('.reveal');

  // Intersection Observer for Section Highlighting & Reveal on Scroll
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -20% 0px', // Trigger when section occupies the middle portion
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Reveal Elements Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    root: null,
    threshold: 0.05
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Fallback: standard scroll-based activation if IntersectionObserver doesn't trigger
  const triggerRevealFallback = () => {
    revealElements.forEach(element => {
      if (!element.classList.contains('active')) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          element.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', triggerRevealFallback);
  window.addEventListener('resize', triggerRevealFallback);
  setTimeout(triggerRevealFallback, 800); // Trigger once shortly after load

  /* ==========================================
     3. ANIMATED SKILLS PROGRESS BARS
     ========================================== */
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const percent = bar.getAttribute('data-percent');
          if (percent) {
            bar.style.width = percent + '%';
          }
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  if (skillsSection && skillBars.length > 0) {
    skillsObserver.observe(skillsSection);
  }

  // Fallback for skills progress animation
  const triggerSkillsFallback = () => {
    if (skillsSection && skillBars.length > 0) {
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        skillBars.forEach(bar => {
          if (!bar.style.width || bar.style.width === '0px' || bar.style.width === '0%') {
            const percent = bar.getAttribute('data-percent');
            if (percent) {
              bar.style.width = percent + '%';
            }
          }
        });
      }
    }
  };
  window.addEventListener('scroll', triggerSkillsFallback);
  setTimeout(triggerSkillsFallback, 1000);

  /* ==========================================
     5. PREMIUM TESTIMONIAL SLIDER
     ========================================== */
  const track = document.querySelector('.testimonial-track');
  const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
  const prevBtn = document.querySelector('.slider-btn-prev');
  const nextBtn = document.querySelector('.slider-btn-next');
  const dotsContainer = document.querySelector('.slider-dots');

  if (track && slides.length > 0 && dotsContainer) {
    let currentIndex = 0;
    let autoSlideInterval;

    // Create Navigation Dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.slider-dot'));

    // Move to specific slide index
    const goToSlide = (index) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update Dots Active Class
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
      }
    };

    // Event Listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
      });
    }

    // Auto sliding function
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 6000);
    };

    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };

    // Pause sliding on hover
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
      sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    startAutoSlide();
  }

  /* ==========================================
     6. CONTACT FORM VALIDATION & HANDLING
     ========================================== */
  const contactForm = document.getElementById('portfolioContactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('formName');
      const emailEl = document.getElementById('formEmail');
      const serviceEl = document.getElementById('formService');
      const budgetEl = document.getElementById('formBudget');
      const messageEl = document.getElementById('formMessageText');

      if (!nameEl || !emailEl || !messageEl) return;

      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const service = serviceEl ? serviceEl.value : '';
      const budget = budgetEl ? budgetEl.value : '';
      const message = messageEl.value.trim();

      // Simple Validation
      if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields (Name, Email, Message).', 'error');
        return;
      }

      if (!validateEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
      }

      // Simulated Submission
      showFormMessage('Sending your request...', 'info');

      setTimeout(() => {
        // Success Message
        showFormMessage(`Thank you, ${name}! Your request has been successfully sent. I will get back to you within 24 hours.`, 'success');
        contactForm.reset();
      }, 1500);
    });
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const showFormMessage = (text, type) => {
    if (!formMessage) return;

    formMessage.textContent = text;
    formMessage.className = 'form-message'; // Reset classes

    if (type === 'success') {
      formMessage.classList.add('success');
    } else if (type === 'error') {
      formMessage.classList.add('error');
    } else {
      formMessage.style.display = 'block';
      formMessage.style.background = 'rgba(56, 189, 248, 0.1)';
      formMessage.style.border = '1px solid var(--accent-blue)';
      formMessage.style.color = 'var(--accent-blue)';
    }
  };

  /* ==========================================
     7. CV PREVIEW MODAL
     ========================================== */
  const cvModal = document.getElementById('cvModal');
  const btnPreview = document.getElementById('btnPreviewCV');
  const btnClose = document.querySelector('.cv-modal-close');

  if (cvModal && btnPreview) {
    btnPreview.addEventListener('click', (e) => {
      e.preventDefault();
      cvModal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    });
  }

  if (btnClose && cvModal) {
    btnClose.addEventListener('click', () => {
      cvModal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable background scrolling
    });

    // Close modal when clicking outside the image
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Flag indicating successful execution of main portfolio script
  window.portfolioInitialized = true;
}

// Bulletproof execution wrapper: run immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
