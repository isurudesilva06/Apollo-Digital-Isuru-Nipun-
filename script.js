// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (navMenu && navToggle && navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            navToggle.classList.remove('is-active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.classList.toggle('is-active', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

// Video Modal Functionality
const playButton = document.getElementById('playVideoBtn') || document.querySelector('.play-btn-glass') || document.querySelector('.play-button') || document.querySelector('.play-button-overlay');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoFrame = document.getElementById('videoFrame');

// You can replace this with your actual video URL
const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video

if (playButton) {
    playButton.addEventListener('click', () => {
        videoFrame.src = videoUrl;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoFrame.src = '';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Sign Up Modal Functionality
const signupBtnHeader = document.querySelector('.signup-btn-header');
const ctaButton = document.querySelector('.cta-button');
const signupModal = document.getElementById('signupModal');
const closeSignupModal = document.getElementById('closeSignupModal');

signupBtnHeader.addEventListener('click', () => {
    signupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

ctaButton.addEventListener('click', () => {
    // Scroll to opportunity section
    const opportunitySection = document.getElementById('opportunity');
    if (opportunitySection) {
        opportunitySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

closeSignupModal.addEventListener('click', () => {
    signupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close signup modal when clicking outside
signupModal.addEventListener('click', (e) => {
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Form Submissions
const signupForm = document.querySelector('.signup-form');
const newsletterForm = document.querySelector('.newsletter-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Thank you for signing up! We will contact you soon.');
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        signupForm.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Bidding CTA Button
const biddingCtaBtn = document.querySelector('.bidding-cta-btn');
if (biddingCtaBtn) {
    biddingCtaBtn.addEventListener('click', () => {
        // Scroll to footer contact section
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Browse More Button
const browseMoreBtn = document.querySelector('.browse-more-btn');
if (browseMoreBtn) {
    browseMoreBtn.addEventListener('click', () => {
        // You can add functionality to load more news articles or navigate to a news page
        alert('Browse more news articles - This would typically navigate to a news page or load more articles.');
    });
}

// Discover More Button
const discoverMoreBtn = document.querySelector('.discover-more-btn');
if (discoverMoreBtn) {
    discoverMoreBtn.addEventListener('click', () => {
        // You can add functionality to load more news articles or navigate to a news page
        alert('Discover more news articles - This would typically navigate to a news page or load more articles.');
    });
}

// Event Cards Click Handler
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
        // You can add functionality to show event details or navigate to event page
        const eventTitle = card.querySelector('.event-title').textContent;
        alert(`Viewing details for: ${eventTitle}`);
    });
});

// News Cards Click Handler
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        // You can add functionality to navigate to full article
        const newsTitle = card.querySelector('.news-title').textContent;
        alert(`Reading article: ${newsTitle}`);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            videoFrame.src = '';
            document.body.style.overflow = 'auto';
        }
        if (signupModal.classList.contains('active')) {
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.mission-section, .gallery-section, .events-section, .news-section, .bidding-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate event cards and news cards on scroll
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.event-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});
