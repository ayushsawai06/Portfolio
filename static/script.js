document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // Mobile Navigation Toggle
  // =========================
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  hamburger?.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // =========================
  // Scroll Spy with IntersectionObserver
  // =========================
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.6 // Trigger when 60% of section is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Remove previous active class
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active to the one in view
        if (link) {
          link.classList.add('active');
        }
      }
    });
  }, options);

  // Observe each section
  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });

  // =========================
  // Smooth Scroll & Close Menu on Click
  // =========================
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Auto close nav on mobile after clicking link
      nav.classList.remove('active');
    });
  });

  // =========================
  // Typing Animation
  // =========================
  const typingElement = document.getElementById('typing');
  const words = ["Data Analyst", "SQL Developer", "Power BI Developer", "Python Developer"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typingElement) return; // Safety check

    const currentWord = words[wordIndex];
    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, letterIndex);

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && letterIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  if (typingElement) type();

  // =========================
  // Close nav if clicked outside (Mobile UX)
  // =========================
  document.addEventListener('click', (e) => {
    if (hamburger && nav && !hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('active');
    }
  });

  // =========================
  // Toast/Contact Form Popup (if form is on same page)
  // =========================
  const form = document.querySelector('.contact-form');
  const toast = document.getElementById('toast');

  if (form && toast) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        form.reset();
      }, 3000);
    });
  }
});
