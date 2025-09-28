// Smooth Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    let isMenuOpen = false;
    
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Open menu
            mobileMenuToggle.classList.add('active');
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            // Close menu
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    function closeMobileMenu() {
        if (isMenuOpen) {
            isMenuOpen = false;
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Toggle menu on hamburger click
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Close menu when clicking overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Prevent menu from closing when clicking inside it
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar scroll effect (mobile-optimized)
let navbarTimeout;
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

window.addEventListener('scroll', function() {
    clearTimeout(navbarTimeout);
    navbarTimeout = setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }, isMobileDevice ? 16 : 10);
}, { passive: true });

// Modern Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Mobile-optimized observer options
    const observerOptions = {
        threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
        rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px' // Smaller margin for mobile
    };
    
    // Track which elements have been animated to prevent re-triggering
    const animatedElements = new Set();
    let isScrolling = false;
    let scrollTimeout;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !animatedElements.has(entry.target) && !isScrolling) {
                // Mark element as animated
                animatedElements.add(entry.target);
                
                // Stagger animation for multiple elements (shorter delay on mobile)
                const delay = isMobile ? index * 50 : index * 100;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.classList.add('animate-in');
                }, delay);
                
                // Unobserve the element after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step, .testimonial-card, .benefit-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.95)';
        el.style.transition = isMobile ? 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Mobile-optimized scroll handling
    function handleScroll() {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, isMobile ? 150 : 100);
    }
    
    // Use passive listeners for better mobile performance
    const scrollOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, scrollOptions);
    
    // Mobile touch event handling to prevent animation glitches
    if (isMobile) {
        let touchStartY = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].clientY;
            const touchDiff = Math.abs(touchStartY - touchEndY);
            
            // If significant touch movement, delay animations
            if (touchDiff > 10) {
                isScrolling = true;
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 200);
            }
        }, { passive: true });
    }
    
    // Parallax effect for hero background (mobile-optimized)
    let parallaxTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(parallaxTimeout);
        parallaxTimeout = setTimeout(() => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero::before');
            if (parallax) {
                // Reduce parallax intensity on mobile
                const intensity = isMobile ? 0.3 : 0.5;
                parallax.style.transform = `translateY(${scrolled * intensity}px)`;
            }
        }, isMobile ? 16 : 10);
    }, scrollOptions);
});

// Form handling (if forms are added later)
function handleFormSubmission(form) {
    // Prevent default form submission
    form.preventDefault();
    
    // Get form data
    const formData = new FormData(form.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = form.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call (replace with actual implementation)
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('Thank you for your interest! We\'ll be in touch soon.', 'success');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#43e97b' : type === 'error' ? '#f5576c' : '#667eea'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// CTA button click tracking
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            const buttonType = this.classList.contains('btn-primary') ? 'primary' : 'outline';
            
            // Track button clicks (replace with actual analytics)
            console.log(`CTA clicked: ${buttonText} (${buttonType})`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Lazy loading for images (if images are added)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations or effects can be added here
    // This is now handled by the optimized navbar and parallax handlers above
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navActions = document.querySelector('.nav-actions');
        
        if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
            navLinks.style.display = 'none';
            navActions.style.display = 'none';
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Accessibility: Focus management
document.addEventListener('DOMContentLoaded', function() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #667eea;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Signup Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const signupModal = document.getElementById('signupModal');
    const signupForm = document.getElementById('signupForm');
    const closeBtn = document.querySelector('.close');
    const signupButtons = document.querySelectorAll('a[href="#signup"]');
    
    // Redirect to Google Form when signup buttons are clicked
    signupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Google Form
            window.open('https://forms.gle/your-form-id-here', '_blank');
        });
    });
    
    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSignupModal);
    }
    
    // Close modal when clicking outside
    if (signupModal) {
        signupModal.addEventListener('click', function(e) {
            if (e.target === signupModal) {
                closeSignupModal();
            }
        });
    }
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && signupModal.classList.contains('show')) {
            closeSignupModal();
        }
    });
    
    // Handle form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignupSubmission(this);
        });
    }
    
    function openSignupModal() {
        if (signupModal) {
            signupModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Focus on first input
            const firstInput = signupModal.querySelector('input');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        }
    }
    
    function closeSignupModal() {
        if (signupModal) {
            signupModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
    
    function handleSignupSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Get submit button
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            showNotification('Thank you for your interest! We\'ll be in touch soon.', 'success');
            
            // Close modal
            closeSignupModal();
            
            // Reset form
            form.reset();
            
            // Log form data (replace with actual submission)
            console.log('Signup form submitted:', data);
        }, 2000);
    }
});

// Initialize all functionality safely
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize all components
        console.log('X Check landing page loaded successfully');
        
        
    } catch (error) {
        console.error('Error initializing landing page:', error);
    }
});
