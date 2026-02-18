/**
 * Ascot Supply Co - Interactive Header Script
 * Handles mobile menu toggle and responsive navigation
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', init);
    
    function init() {
        setupMobileMenu();
        setupScrollBehavior();
    }
    
    /**
     * Setup mobile menu toggle functionality
     */
    function setupMobileMenu() {
        const toggle = document.querySelector('.header__toggle');
        const nav = document.querySelector('.header__nav');
        const actions = document.querySelector('.header__actions');
        
        if (!toggle || !nav) {
            return;
        }
        
        // Toggle menu on button click
        toggle.addEventListener('click', function() {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            toggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle is-open class
            nav.classList.toggle('is-open');
            if (actions) {
                actions.classList.toggle('is-open');
            }
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });
        
        // Close menu when clicking on nav links
        const navLinks = nav.querySelectorAll('.nav__link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    toggle.click();
                }
            });
        });
        
        // Close menu on window resize if it gets larger
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth >= 768) {
                    nav.classList.remove('is-open');
                    if (actions) {
                        actions.classList.remove('is-open');
                    }
                    toggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            }, 250);
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                toggle.click();
            }
        });
    }
    
    /**
     * Add shadow to header on scroll
     */
    function setupScrollBehavior() {
        const header = document.querySelector('.header');
        
        if (!header) {
            return;
        }
        
        let scrollPos = 0;
        
        window.addEventListener('scroll', function() {
            const currentScrollPos = window.pageYOffset;
            
            if (currentScrollPos > 10) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }
            
            scrollPos = currentScrollPos;
        });
    }
    
})();
