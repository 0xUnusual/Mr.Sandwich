document.addEventListener('DOMContentLoaded', () => {
    // --- GSAP & ScrollTrigger Setup ---
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animations
    const tl = gsap.timeline();
    
    tl.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('[data-gsap="fade-up"].hero-subtitle', {
        y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
    }, "-=0.4")
    .from('[data-gsap="fade-up"].hero-title', {
        y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
    }, "-=0.4")
    .from('[data-gsap="fade-up"].hero-description', {
        y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
    }, "-=0.4")
    .from('[data-gsap="fade-up"].hero-buttons', {
        y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
    }, "-=0.4")
    .from('[data-gsap="scale-up"]', {
        scale: 0.9, opacity: 0, duration: 1, ease: 'power3.out'
    }, "-=0.2");

    // Scroll Animations
    const fadeUpElements = document.querySelectorAll('[data-gsap="fade-up"]:not(.hero *)');
    fadeUpElements.forEach(el => {
        let delay = el.getAttribute('data-delay') || 0;
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: Number(delay),
            ease: 'power2.out'
        });
    });

    const flipUpElements = document.querySelectorAll('[data-gsap="flip-up"]');
    flipUpElements.forEach(el => {
        let delay = el.getAttribute('data-delay') || 0;
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            rotationX: -90,
            transformOrigin: "top center",
            opacity: 0,
            duration: 0.8,
            delay: Number(delay),
            ease: 'back.out(1.7)'
        });
    });

    gsap.from('.faq-left', {
        scrollTrigger: {
            trigger: '.faq-container',
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    gsap.from('.faq-right', {
        scrollTrigger: {
            trigger: '.faq-container',
            start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });



    // --- Image Logic ---
    const heroImage = document.getElementById('hero-image');
    const imageContainer = document.getElementById('image-container');

    // --- Dynamic Aspect Ratio based on scroll & device ---
    const isMobileDevice = () => window.innerWidth <= 768;

    ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
            // Calculate progress (0 to 1)
            const progress = self.progress;
            
            if (isMobileDevice()) {
                // On mobile, transition from 16:9 to 4:5 as they scroll
                if (progress > 0.1) {
                    if (imageContainer) imageContainer.classList.add('mobile-aspect');
                } else {
                    if (imageContainer) imageContainer.classList.remove('mobile-aspect');
                }
            } else {
                // On desktop, perhaps add a slight parallax or zoom effect
                if (heroImage) gsap.set(heroImage, { scale: 1 + (progress * 0.1) });
            }
        }
    });

    // Also check on resize
    window.addEventListener('resize', () => {
        if (!isMobileDevice()) {
            if (imageContainer) imageContainer.classList.remove('mobile-aspect');
        }
    });


    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });

            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
