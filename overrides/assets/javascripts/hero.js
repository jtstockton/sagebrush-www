/**
 * Hero Section - Parallax and Scroll Effects
 * Handles transparent header, parallax scrolling, and smooth transitions
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHero);
  } else {
    initHero();
  }

  function initHero() {
    const header = document.querySelector('.md-header');
    const heroSection = document.querySelector('.hero-section');
    const heroBackground = document.querySelector('.hero-background');
    const heroContent = document.querySelector('.hero-content');
    const tabs = document.querySelector('.md-tabs');
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    const heroTitle1 = document.getElementById('heroTitle1');
    const heroTitle2 = document.getElementById('heroTitle2');
    const headerTitle = document.querySelector('.md-header__title');

    // Only run on homepage with hero section
    if (!heroSection) {
      // Not on hero page - ensure header has normal styling
      if (header) {
        header.classList.remove('md-header--transparent');
      }
      return;
    }

    // Force header to transparent state on page load/navigation
    if (header) {
      // Aggressively remove scrolled class and add transparent class
      header.classList.remove('md-header--scrolled');
      header.classList.add('md-header--transparent');
      // Force immediate update of header at current scroll position
      setTimeout(() => updateParallax(), 10);
    }

    // Mark tabs as hero tabs immediately
    if (tabs) {
      tabs.classList.add('md-tabs--hero');
    }

    // Parallax scroll effect
    let ticking = false;

    function updateParallax() {
      const scrolled = window.pageYOffset;
      const heroHeight = heroSection.offsetHeight;

      // Parallax effect - background moves slower than scroll
      if (heroBackground) {
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }

      // Animated hero titles with slide and fade
      if (heroTitle1 && heroTitle2) {
        // Title 1: Slides up and fades as soon as scrolling starts (0-25%)
        const title1FadeEnd = heroHeight * 0.25;  // Complete slide and fade by 25%

        if (scrolled === 0) {
          // Initial state - fully visible, centered
          heroTitle1.style.transform = 'translateY(0)';
          heroTitle1.style.opacity = '1';
        } else if (scrolled < title1FadeEnd) {
          // Slide up and fade out proportional to scroll
          const progress = scrolled / title1FadeEnd;
          const slideDistance = progress * -200;  // Slide up 200px total
          heroTitle1.style.transform = `translateY(${slideDistance}px)`;
          heroTitle1.style.opacity = String(1 - progress);
        } else {
          // Hidden and slid up
          heroTitle1.style.transform = 'translateY(-200px)';
          heroTitle1.style.opacity = '0';
        }

        // Title 2: Appears as title 1 slides up
        const title2FadeInStart = heroHeight * 0.15;  // Start fading in at 15%
        const title2FadeInEnd = heroHeight * 0.25;    // Fully visible at 25%
        const title2FadeOutStart = heroHeight * 0.60; // Start fading out at 60%
        const title2FadeOutEnd = heroHeight * 0.80;   // Complete fade at 80%

        if (scrolled < title2FadeInStart) {
          heroTitle2.style.opacity = '0';
        } else if (scrolled < title2FadeInEnd) {
          const fadeProgress = (scrolled - title2FadeInStart) / (title2FadeInEnd - title2FadeInStart);
          heroTitle2.style.opacity = String(fadeProgress);
        } else if (scrolled < title2FadeOutStart) {
          heroTitle2.style.opacity = '1';
        } else if (scrolled < title2FadeOutEnd) {
          const fadeProgress = (scrolled - title2FadeOutStart) / (title2FadeOutEnd - title2FadeOutStart);
          heroTitle2.style.opacity = String(1 - fadeProgress);
        } else {
          heroTitle2.style.opacity = '0';
        }
      }

      // Header transparency control - becomes solid after hero section
      if (header) {
        // Add solid background when we've scrolled past the hero
        if (scrolled > heroHeight * 0.95) {
          header.classList.add('md-header--scrolled');
          header.classList.remove('md-header--transparent');
        } else {
          header.classList.remove('md-header--scrolled');
          header.classList.add('md-header--transparent');
        }
      }

      // Fade out tabs and header title in sync with title 2 (60-80%)
      if (tabs) {
        const tabsFadeStart = heroHeight * 0.60;  // Start fading at 60% (with title 2)
        const tabsFadeEnd = heroHeight * 0.80;    // Complete fade by 80%

        if (scrolled >= tabsFadeStart) {
          const fadeProgress = (scrolled - tabsFadeStart) / (tabsFadeEnd - tabsFadeStart);
          const tabsOpacity = Math.max(0, 1 - fadeProgress);
          tabs.style.opacity = String(tabsOpacity);

          // Also fade header title at the same time
          if (headerTitle) {
            headerTitle.style.opacity = String(tabsOpacity);
          }

          if (fadeProgress > 0) {
            tabs.classList.add('md-tabs--fading');
            tabs.classList.add('md-tabs--hero'); // Mark as hero page tabs
          }

          if (tabsOpacity === 0) {
            tabs.classList.add('md-tabs--hidden');
            tabs.style.display = 'none'; // Completely hide from DOM
            if (headerTitle) {
              headerTitle.style.visibility = 'hidden'; // Hide header title too
            }
          } else {
            tabs.classList.remove('md-tabs--hidden');
            tabs.style.display = '';
            if (headerTitle) {
              headerTitle.style.visibility = 'visible';
            }
          }
        } else {
          tabs.style.opacity = '1';
          tabs.style.display = '';
          tabs.classList.remove('md-tabs--fading');
          tabs.classList.remove('md-tabs--hidden');
          tabs.classList.add('md-tabs--hero'); // Mark as hero page tabs

          // Reset header title
          if (headerTitle) {
            headerTitle.style.opacity = '1';
            headerTitle.style.visibility = 'visible';
          }
        }
      }

      // Hide scroll indicator after scrolling starts
      if (scrollIndicator) {
        if (scrolled > 50) {
          scrollIndicator.style.opacity = 0;
          scrollIndicator.style.pointerEvents = 'none';
        } else {
          scrollIndicator.style.opacity = 0.8;
          scrollIndicator.style.pointerEvents = 'auto';
        }
      }

      ticking = false;
    }

    // Throttle scroll events using requestAnimationFrame
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    // Attach scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });

    // Smooth scroll to content when clicking scroll indicator
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', function() {
        const contentSection = document.querySelector('.content-section');
        if (contentSection) {
          contentSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }

    // Initial update
    updateParallax();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateParallax, 100);
    }, { passive: true });

    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe feature cards for fade-in effect
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
      });
    }

    // Handle color scheme changes
    const colorSchemeObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'data-md-color-scheme') {
          // Trigger a redraw to update gradient colors
          updateParallax();
        }
      });
    });

    const body = document.body;
    if (body) {
      colorSchemeObserver.observe(body, {
        attributes: true,
        attributeFilter: ['data-md-color-scheme']
      });
    }

    // Preload hero images for smoother experience
    const imageUrls = [
      '/assets/images/landscape1.png',
      '/assets/images/landscape2.png'
    ];

    imageUrls.forEach(function(url) {
      const img = new Image();
      img.src = url;
    });

    console.log('Hero parallax effects initialized');
  }

  // Listen for MkDocs Material instant loading navigation
  // This ensures hero is reinitialized when navigating back to homepage
  document.addEventListener('DOMContentSwitch', function() {
    setTimeout(initHero, 50); // Small delay to ensure DOM is updated
  });

  // Also listen for location changes as a fallback
  let lastLocation = location.href;
  new MutationObserver(() => {
    if (location.href !== lastLocation) {
      lastLocation = location.href;
      setTimeout(initHero, 50);
    }
  }).observe(document.querySelector('body'), {
    childList: true,
    subtree: true
  });
})();
