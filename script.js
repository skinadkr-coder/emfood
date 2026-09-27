// ============================================
// 전역 변수 및 DOM 요소 선택
// ============================================
const scrollContainer = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.page-indicator .dot');
const modal = document.getElementById('certModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

let isScrolling = false;
let scrollTimeout;

// ============================================
// 페이지 로드 시 초기화
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initPageIndicator();
    initScrollSnap();
    initProductTabs();
    initCertificateModal();
    initContactForm();
    initSmoothScroll();
    updateActiveSection();
});

// ============================================
// 페이지 인디케이터 초기화
// ============================================
function initPageIndicator() {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById(`section-${index}`);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                updateDots(index);
            }
        });
    });
}

// ============================================
// 스크롤 스냅 및 현재 섹션 감지
// ============================================
function initScrollSnap() {
    let ticking = false;

    scrollContainer.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }

        // 스크롤 종료 감지
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            isScrolling = false;
        }, 150);
    });

    // 터치 이벤트 (모바일 최적화)
    let touchStartY = 0;
    let touchEndY = 0;

    scrollContainer.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    scrollContainer.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
            // 스와이프 감지됨
            updateActiveSection();
        }
    }
}

// ============================================
// 현재 섹션 업데이트 및 도트 활성화
// ============================================
function updateActiveSection() {
    const scrollPosition = scrollContainer.scrollTop + (window.innerHeight / 2);

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            updateDots(index);
        }
    });
}

function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ============================================
// 제품 탭 기능
// ============================================
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // 모든 탭 버튼 비활성화
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 클릭된 버튼 활성화
            this.classList.add('active');

            // 모든 탭 컨텐츠 숨기기
            tabContents.forEach(content => content.classList.remove('active'));
            // 해당 탭 컨텐츠 표시
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================
// 인증서 모달 기능
// ============================================
function initCertificateModal() {
    const certCards = document.querySelectorAll('.cert-card');

    certCards.forEach(card => {
        card.addEventListener('click', function() {
            const certType = this.getAttribute('data-cert');
            openCertModal(certType);
        });
    });

    // 모달 닫기 이벤트
    if (modalClose) {
        modalClose.addEventListener('click', closeCertModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeCertModal);
    }

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCertModal();
        }
    });
}

function openCertModal(certType) {
    const certData = {
        'haccp': {
            title: '식품안전관리인증기준(HACCP) 인증서',
            description: 'HACCP 인증서 원본 이미지'
        },
        'factory': {
            title: '공장등록증명서',
            description: '공장등록증 원본 이미지'
        },
        'business': {
            title: '사업자등록증',
            description: '사업자등록증 원본 이미지'
        }
    };

    const cert = certData[certType];
    if (cert) {
        modalTitle.textContent = cert.title;
        modalImage.innerHTML = `<p>${cert.description}</p>`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }
}

function closeCertModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
}

// ============================================
// 문의 폼 제출 처리
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 폼 데이터 수집
            const formData = {
                companyName: document.getElementById('companyName').value,
                contactName: document.getElementById('contactName').value,
                phone: document.getElementById('phone').value,
                product: document.getElementById('product').value,
                message: document.getElementById('message').value
            };

            // 유효성 검사
            if (!formData.companyName || !formData.contactName || !formData.phone || !formData.product) {
                alert('필수 항목을 모두 입력해주세요.');
                return;
            }

            // 전화번호 형식 검사 (간단한 검사)
            const phoneRegex = /^[0-9-]+$/;
            if (!phoneRegex.test(formData.phone)) {
                alert('올바른 전화번호 형식을 입력해주세요.');
                return;
            }

            // 실제 서비스에서는 여기서 서버로 데이터 전송
            console.log('문의 접수:', formData);

            // 성공 메시지
            alert(`문의가 접수되었습니다!\n\n업체명: ${formData.companyName}\n담당자: ${formData.contactName}\n연락처: ${formData.phone}\n\n빠른 시일 내에 연락드리겠습니다.`);

            // 폼 초기화
            contactForm.reset();
        });

        // 전화번호 입력 시 자동 하이픈 추가
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
    }
}

// ============================================
// 부드러운 스크롤 (앵커 링크)
// ============================================
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // href가 #만 있는 경우 무시
            if (href === '#' || !href) {
                return;
            }

            e.preventDefault();

            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // 페이지 인디케이터 업데이트
                const sectionIndex = Array.from(sections).indexOf(targetElement);
                if (sectionIndex !== -1) {
                    updateDots(sectionIndex);
                }
            }
        });
    });
}

// ============================================
// 스크롤 애니메이션 (Intersection Observer)
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소 관찰
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.card, .process-step, .cert-card, .product-card, .business-card, .channel-card');
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// ============================================
// 키보드 네비게이션 (화살표 키)
// ============================================
document.addEventListener('keydown', function(e) {
    // 모달이 열려있거나 입력 필드에 포커스가 있으면 무시
    if (modal.classList.contains('active') || 
        document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA' ||
        document.activeElement.tagName === 'SELECT') {
        return;
    }

    const currentIndex = getCurrentSectionIndex();

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToSection(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToSection(currentIndex - 1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSection(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSection(sections.length - 1);
    }
});

function getCurrentSectionIndex() {
    const scrollPosition = scrollContainer.scrollTop + (window.innerHeight / 2);
    let currentIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentIndex = index;
        }
    });

    return currentIndex;
}

function navigateToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        updateDots(index);
    }
}

// ============================================
// 마우스 휠 이벤트 최적화 (PC)
// ============================================
let wheelTimeout;
let wheelDelta = 0;

if (window.innerWidth > 768) {
    scrollContainer.addEventListener('wheel', function(e) {
        // 기본 스크롤 동작 허용 (Scroll Snap이 자동 처리)
        clearTimeout(wheelTimeout);
        
        wheelTimeout = setTimeout(function() {
            wheelDelta = 0;
        }, 200);
    }, { passive: true });
}

// ============================================
// 윈도우 리사이즈 최적화
// ============================================
let resizeTimeout;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        updateActiveSection();
    }, 250);
});

// ============================================
// 퍼포먼스 최적화: 페이지 가시성
// ============================================
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 페이지가 백그라운드로 갈 때 애니메이션 중지
        document.body.style.animationPlayState = 'paused';
    } else {
        // 페이지가 다시 활성화될 때 애니메이션 재개
        document.body.style.animationPlayState = 'running';
        updateActiveSection();
    }
});

// ============================================
// 디버그 정보 (개발용 - 프로덕션에서는 제거)
// ============================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🎨 이맛식품 웹사이트 로드 완료');
    console.log(`📱 화면 크기: ${window.innerWidth}x${window.innerHeight}`);
    console.log(`📄 섹션 개수: ${sections.length}`);
}

// ============================================
// 추가 기능: 스크롤 진행도 표시 (선택사항)
// ============================================
function updateScrollProgress() {
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    // 프로그레스 바가 있다면 업데이트
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

scrollContainer.addEventListener('scroll', updateScrollProgress);

// ============================================
// 이미지 Lazy Loading (최적화)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
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

    // data-src 속성을 가진 이미지를 관찰
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 접근성 개선: Skip to Content
// ============================================
document.addEventListener('keydown', function(e) {
    // Alt + 1: 메인 컨텐츠로 이동
    if (e.altKey && e.key === '1') {
        e.preventDefault();
        sections[1].scrollIntoView({ behavior: 'smooth' });
    }
    // Alt + 9: 문의하기로 이동
    if (e.altKey && e.key === '9') {
        e.preventDefault();
        sections[sections.length - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================
// 모바일 브라우저 주소창 숨김 처리
// ============================================
function hideAddressBar() {
    if (window.innerWidth <= 768) {
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 0);
    }
}

window.addEventListener('load', hideAddressBar);
window.addEventListener('orientationchange', function() {
    setTimeout(hideAddressBar, 100);
});

// ============================================
// 서비스 워커 등록 (PWA - 선택사항)
// ============================================
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// ============================================
// 동적 이벤트: 클릭 추적 (분석용 - 선택사항)
// ============================================
function trackEvent(category, action, label) {
    // Google Analytics 또는 다른 분석 도구와 연동
    console.log('Event tracked:', category, action, label);
    
    // 예: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// 모든 버튼 클릭 추적
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const label = this.textContent.trim();
        trackEvent('Button', 'Click', label);
    });
});

// 전화번호 클릭 추적
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('Contact', 'Call', this.href);
    });
});

// ============================================
// 초기 로딩 애니메이션
// ============================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 스크롤 컨테이너가 맨 위에서 시작하도록 보장
    scrollContainer.scrollTop = 0;
    
    // 첫 번째 도트 활성화
    updateDots(0);
});

// ============================================
// Export for testing (필요시)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateActiveSection,
        updateDots,
        navigateToSection,
        getCurrentSectionIndex
    };
}
