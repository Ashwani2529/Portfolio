// Enhanced Contact Form with Simple Mailto Method
document.getElementById("emailForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Form validation with visual feedback
  const form = this;
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    const parent = input.parentElement;
    parent.classList.remove('error');
    
    if (input.hasAttribute('required') && !input.value.trim()) {
      parent.classList.add('error');
      input.style.borderColor = '#ef4444';
      isValid = false;
      
      setTimeout(() => {
        input.style.borderColor = '';
      }, 3000);
    }
    
    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        parent.classList.add('error');
        input.style.borderColor = '#ef4444';
        isValid = false;
        showNotification('Please enter a valid email address', 'error');
        
        setTimeout(() => {
          input.style.borderColor = '';
        }, 3000);
      }
    }
  });
  
  if (!isValid) {
    showNotification('Please fill in all required fields correctly', 'error');
    return;
  }
  
  // Show loading state
  const submitBtn = form.querySelector('.btn');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin" aria-hidden="true"></i> Opening Email...';
  submitBtn.style.pointerEvents = 'none';
  submitBtn.classList.add('loading');
  
  // Get form data
  const fullName = form.querySelector('[name="fullName"]').value.trim();
  const emailAddress = form.querySelector('[name="emailAddress"]').value.trim();
  const mobileNumber = form.querySelector('[name="mobileNumber"]').value.trim();
  const subject = form.querySelector('[name="subject"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();
  
  // Create mailto URL
  const mailtoParams = `mailto:ashwani.singh2@s.amity.edu?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    message +
      "\n\n\n\nName: " +
      fullName +
      "\nEmail: " +
      emailAddress +
      (mobileNumber ? "\nPhone: " + mobileNumber : "")
  )}`;
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  setTimeout(() => {
    if (isMobile) {
      window.location.href = mailtoParams;
    } else {
      const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        "ashwani.singh2@s.amity.edu"
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        message +
          "\n\n\n\nName: " +
          fullName +
          "\nEmail: " +
          emailAddress +
          (mobileNumber ? "\nPhone: " + mobileNumber : "")
      )}`;
      window.open(composeUrl, "_blank");
    }
    
    // Reset form and show success message
    form.reset();
    showNotification('Email client opened successfully! Please send the message from your email app.', 'success');
    
    // Add success animation to form
    form.style.transform = 'scale(0.98)';
    setTimeout(() => {
      form.style.transform = 'scale(1)';
    }, 200);
    
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.style.pointerEvents = '';
    submitBtn.classList.remove('loading');
  }, 1500);
});

// Enhanced Mobile Menu with Animation
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  
  // Add smooth animation for menu items
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach((link, index) => {
    if (navbar.classList.contains('active')) {
      link.style.animation = `slideIn 0.5s ease forwards ${index / 7 + 0.1}s`;
    } else {
      link.style.animation = '';
    }
  });
};

// Enhanced Scroll Navigation with Smooth Animations
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
});

// Enhanced Scroll Detection with Throttling
let isScrolling = false;

window.onscroll = () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
};

function handleScroll() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        const activeLink = document.querySelector("header nav a[href*=" + id + "]");
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });
  
  // Enhanced Header Styling
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  
  // Close mobile menu on scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

// Enhanced Typing Animation with More Dynamic Options
const typed = new Typed(".multiple-text", {
  strings: [
    "Full Stack Developer",
    "AI/ML Enthusiast", 
    "Cloud Architect",
    "Problem Solver",
    "Tech Innovator"
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1200,
  loop: true,
  showCursor: true,
  cursorChar: '|',
  smartBackspace: true
});

// Advanced Scroll Animations with Intersection Observer
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -30px 0px'
};

// Enhanced observer for general sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Add stagger animation for children elements
      const children = entry.target.querySelectorAll('.animate-child');
      children.forEach((child, index) => {
        child.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
      });
      
      // Special animations for specific sections
      if (entry.target.classList.contains('skills')) {
        animateSkillsBoxes();
      }
    }
  });
}, observerOptions);

// Specialized observer for project and experience cards
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add staggered animation based on position in grid
      const allCards = [...document.querySelectorAll('.projects-box, .projects-box1')];
      const cardIndex = allCards.indexOf(entry.target);
      const delay = (cardIndex % 3) * 150; // Stagger based on position in row
      
      setTimeout(() => {
        entry.target.classList.add('animate-in');
      }, delay);
      
      // Remove observer once animated
      projectObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

// Enhanced observer for project sections to trigger container animations
const projectSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const projectCards = entry.target.querySelectorAll('.projects-box, .projects-box1');
      
      // Start observing individual cards with a slight delay
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          projectObserver.observe(card);
        }, index * 50);
      });
      
      // Only trigger once per section
      projectSectionObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

// Observe all sections for scroll animations
sections.forEach(section => {
  // Skip home section as it has its own animations
  if (!section.classList.contains('home')) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  }
});

// Observe project sections for card animations
const projectSections = document.querySelectorAll('#projects, #experience, #achievements');
projectSections.forEach(section => {
  projectSectionObserver.observe(section);
});

// Skills Section Animation
function animateSkillsBoxes() {
  const skillsBoxes = document.querySelectorAll('.skills-box');
  skillsBoxes.forEach((box, index) => {
    box.style.animation = `slideInUp 0.6s ease forwards ${index * 0.15}s`;
  });
}

// Enhanced fade-in-view functionality for better performance
function initScrollRevealAnimations() {
  // Create a more performant intersection observer for fade-in effects
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-active');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });
  
  // Add fade-in-view class to elements that need scroll animations
  const fadeElements = document.querySelectorAll('.projects-box, .projects-box1, .skills-box');
  fadeElements.forEach(el => {
    el.classList.add('fade-in-view');
    fadeObserver.observe(el);
  });
}

// Particle Animation for Background
function createParticleSystem() {
  const particleContainer = document.createElement('div');
  particleContainer.id = 'particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  
  document.body.appendChild(particleContainer);
  
  // Create particles
  for (let i = 0; i < 50; i++) {
    createParticle(particleContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  const size = Math.random() * 4 + 1;
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 20;
  
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.4));
    border-radius: 50%;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    animation: float ${duration}s linear infinite ${delay}s;
    opacity: 0;
  `;
  
  container.appendChild(particle);
  
  // Remove and recreate particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
      createParticle(container);
    }
  }, (duration + delay) * 1000);
}

// Enhanced Loading Animation
function showPageLoader() {
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <div class="loader-text">Loading...</div>
    </div>
  `;
  
  loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0a0a0f, #1a1a27);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    transition: opacity 0.5s ease;
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    .loader-content {
      text-align: center;
    }
    .loader-spinner {
      width: 50px;
      height: 50px;
      border: 3px solid rgba(99, 102, 241, 0.1);
      border-top: 3px solid #6366f1;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    .loader-text {
      color: #a1a1aa;
      font-size: 18px;
      font-weight: 500;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(loader);
  
  // Hide loader after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      }, 500);
    }, 800);
  });
}

// Parallax Effect for Hero Section
function initParallax() {
  const homeSection = document.querySelector('.home');
  const homeImg = document.querySelector('.home-img img');
  
  if (homeImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3; // Reduced parallax intensity
      if (scrolled < window.innerHeight) { // Only apply within viewport
        homeImg.style.transform = `translateY(${rate}px)`;
      }
    });
  }
}

// Add CSS animations via JavaScript
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes float {
      0% {
        opacity: 0;
        transform: translateY(100vh) rotate(0deg);
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateY(-100vh) rotate(360deg);
      }
    }
    
    .animate-child {
      opacity: 0;
    }
    
    /* Enhanced notification styles */
    .notification-content {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      font-family: 'Inter', sans-serif;
    }
    
    .notification-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    
    .notification-message {
      flex: 1;
      line-height: 1.4;
    }
    
    .notification-close {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
      cursor: pointer;
      padding: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background-color 0.2s ease;
      flex-shrink: 0;
    }
    
    .notification-close:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    /* Enhanced fade-in animations for scroll-triggered elements */
    .fade-in-view {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .fade-in-active {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    /* Smooth reveal animation for project cards */
    .projects-box,
    .projects-box1 {
      transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                  transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .projects-box.animate-in,
    .projects-box1.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  
  document.head.appendChild(style);
}

// Custom Notification System (Enhanced)
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  // Create notification content with icon
  const icon = getNotificationIcon(type);
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-icon">${icon}</div>
      <div class="notification-message">${message}</div>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Style the notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '0',
    borderRadius: '12px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    zIndex: '10000',
    transform: 'translateX(400px)',
    transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    maxWidth: '350px',
    minWidth: '300px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'hidden'
  });
  
  // Set background color based on type
  switch (type) {
    case 'success':
      notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      break;
    case 'error':
      notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      break;
    case 'info':
      notification.style.background = 'linear-gradient(135deg, #06b6d4, #0891b2)';
      break;
    default:
      notification.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
  }
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 6 seconds for success/info, 8 seconds for errors
  const autoRemoveDelay = type === 'error' ? 8000 : 6000;
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, autoRemoveDelay);
}

function getNotificationIcon(type) {
  switch (type) {
    case 'success':
      return '<i class="bx bx-check-circle"></i>';
    case 'error':
      return '<i class="bx bx-error-circle"></i>';
    case 'info':
      return '<i class="bx bx-info-circle"></i>';
    default:
      return '<i class="bx bx-bell"></i>';
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  showPageLoader();
  addAnimationStyles();
  createParticleSystem();
  initParallax();
  initScrollRevealAnimations();
  
  // Add animate-child class to relevant elements
  const animateElements = document.querySelectorAll('.skills-box');
  animateElements.forEach(el => el.classList.add('animate-child'));
});

// Enhanced Performance with Debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to resize events
window.addEventListener('resize', debounce(() => {
  // Recalculate animations on resize
  sections.forEach(section => {
    if (!section.classList.contains('home')) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}, 250));

// Add smooth cursor following effect
let cursor = null;

function initCustomCursor() {
  cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.1s ease;
    opacity: 0;
  `;
  
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      cursor.style.opacity = '1';
    }
  });
  
  document.addEventListener('mouseenter', () => {
    if (cursor) cursor.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', () => {
    if (cursor) cursor.style.opacity = '0';
  });
  
  // Scale cursor on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, .projects-box, .projects-box1, .skills-box');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) cursor.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      if (cursor) cursor.style.transform = 'scale(1)';
    });
  });
}

// Initialize custom cursor only on non-touch devices
if (!('ontouchstart' in window)) {
  document.addEventListener('DOMContentLoaded', initCustomCursor);
}