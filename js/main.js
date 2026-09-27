// ============================================
// 이맛식품 - 메인 JavaScript
// Multi-Page Website
// ============================================

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initActiveNavLink();
    initScrollHeader();
    initTabs();
    initModal();
    initFormValidation();
    initSmoothScroll();
});

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ============================================
// Active Navigation Link
// ============================================
function initActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if current page matches the link
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Scroll Header Effect
// ============================================
function initScrollHeader() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// Tabs Functionality
// ============================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show target tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================
// Modal Functionality
// ============================================
function initModal() {
    const modal = document.getElementById('certModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const certCards = document.querySelectorAll('[data-cert]');

    // Certificate data
    const certData = {
        'haccp': {
            title: '식품안전관리인증기준(HACCP) 인증서',
            image: 'images/cert-haccp.jpg',
            alt: 'HACCP 인증서 - 배추김치, 기타김치'
        },
        'factory': {
            title: '공장등록증명서',
            image: 'images/cert-factory.jpg',
            alt: '공장등록증명서 - 충주시 신니면'
        },
        'business': {
            title: '사업자등록증',
            image: 'images/cert-business.jpg',
            alt: '사업자등록증 - 농업회사법인 이맛식품 주식회사'
        }
    };

    // Open modal
    certCards.forEach(card => {
        card.addEventListener('click', function() {
            const certType = this.getAttribute('data-cert');
            const cert = certData[certType];

            if (cert && modal) {
                if (modalTitle) modalTitle.textContent = cert.title;
                if (modalImage) {
                    modalImage.innerHTML = `
                        <img src="${cert.image}" alt="${cert.alt}" 
                             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%221000%22%3E%3Crect width=%22800%22 height=%221000%22 fill=%22%23f5f5f5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22%3E${cert.title}%3C/text%3E%3C/svg%3E'">
                    `;
                }
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// Form Validation
// ============================================
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Phone number auto-formatting
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/[^0-9]/g, '');
                let formatted = '';

                if (value.length <= 3) {
                    formatted = value;
                } else if (value.length <= 7) {
                    formatted = value.slice(0, 3) + '-' + value.slice(3);
                } else if (value.length <= 11) {
                    formatted = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
                } else {
                    formatted = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
                }

                e.target.value = formatted;
            });
        }

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                companyName: document.getElementById('companyName')?.value,
                contactName: document.getElementById('contactName')?.value,
                phone: document.getElementById('phone')?.value,
                product: document.getElementById('product')?.value,
                quantity: document.getElementById('quantity')?.value,
                message: document.getElementById('message')?.value
            };

            // Basic validation
            if (!formData.companyName || !formData.contactName || !formData.phone) {
                alert('필수 항목을 모두 입력해주세요.');
                return;
            }

            // Phone validation
            const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
            if (!phoneRegex.test(formData.phone)) {
                alert('올바른 전화번호 형식을 입력해주세요. (예: 010-1234-5678)');
                return;
            }

            // Success message
            alert(`문의가 접수되었습니다!\n\n업체명: ${formData.companyName}\n담당자: ${formData.contactName}\n연락처: ${formData.phone}\n\n빠른 시일 내에 연락드리겠습니다.`);

            // Reset form
            contactForm.reset();

            // In production, send data to server:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('문의가 성공적으로 접수되었습니다!');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
            });
            */
        });
    }
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || !href) return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Image Slider (for Hero)
// ============================================
function initHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');

    if (!slider || slides.length === 0) return;

    let currentSlide = 0;
    const slideCount = slides.length;

    // Create dots
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `슬라이드 ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    // Update slider
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to slide
    function goToSlide(index) {
        currentSlide = index;
        if (currentSlide < 0) currentSlide = slideCount - 1;
        if (currentSlide >= slideCount) currentSlide = 0;
        updateSlider();
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto slide
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

// Initialize slider if exists
if (document.querySelector('.hero-slider')) {
    initHeroSlider();
}

// ============================================
// Lazy Loading Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

initBackToTop();

// ============================================
// Console Info
// ============================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c이맛식품 웹사이트', 'font-size: 20px; font-weight: bold; color: #8B1E1E');
    console.log('%c버전: 1.0.0', 'color: #666');
    console.log('%c개발 모드로 실행 중입니다.', 'color: #C89B3C');
}

// ============================================
// Export functions (for testing)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMobileMenu,
        initTabs,
        initModal,
        initFormValidation
    };
}
