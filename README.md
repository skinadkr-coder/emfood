# 이맛식품 - 프리미엄 김치 웹사이트

농업회사법인 이맛식품 주식회사의 공식 웹사이트입니다.
풀페이지 롤스크린(Full-page Scroll Snap) 방식의 현대적인 반응형 랜딩페이지입니다.

## 🎨 주요 특징

### ✨ 기술 스택
- **순수 기술**: 외부 라이브러리 없이 Vanilla JavaScript, CSS, HTML만 사용
- **CSS Scroll Snap**: 부드러운 페이지 스냅 스크롤
- **반응형 디자인**: Mobile-First 접근 방식
- **웹폰트**: Pretendard Variable 사용
- **접근성**: ARIA 레이블, 키보드 네비게이션 지원

### 📱 반응형 최적화
- **PC**: 마우스 휠 스크롤로 섹션 간 부드러운 이동
- **모바일**: 스와이프 터치로 자연스러운 페이지 전환
- **태블릿**: 적응형 레이아웃 자동 조정
- **화면 크기**: 360px ~ 4K 디스플레이까지 완벽 대응

### 🎯 핵심 기능

1. **7개 섹션 풀페이지 구성**
   - 메인 히어로 (Hero)
   - 브랜드 철학 (3대 약속)
   - 제조 시설 & 위생 공정
   - 국가 공인 인증서
   - 제품 라인업 (탭 전환)
   - 구매 채널 안내
   - 문의 폼 & 찾아오시는 길

2. **인터랙티브 요소**
   - 페이지 인디케이터 도트 (현재 위치 표시)
   - 인증서 모달 팝업
   - 제품 탭 전환 (가정용/업소용)
   - 모바일 퀵 상담 바 (전화/문의)
   - 부드러운 스크롤 애니메이션

3. **사용자 경험 (UX)**
   - 스크롤 유도 애니메이션
   - 키보드 단축키 (화살표, Page Up/Down, Home/End)
   - 전화번호 자동 하이픈 포맷
   - 폼 유효성 검사

## 📂 프로젝트 구조

```
emfood/
├── index.html          # 메인 HTML 구조
├── style.css           # 스타일시트 (CSS Scroll Snap 포함)
├── script.js           # JavaScript 인터랙션
├── images/             # 이미지 폴더
│   ├── README.md       # 이미지 가이드
│   ├── kimchi-hero.jpg
│   ├── factory-*.jpg
│   ├── cert-*.jpg
│   └── kimchi-*.jpg
└── README.md           # 프로젝트 설명서
```

## 🚀 시작하기

### 1. 파일 확인
프로젝트 폴더에 다음 파일들이 있는지 확인하세요:
- `index.html`
- `style.css`
- `script.js`
- `images/` 폴더

### 2. 이미지 추가 (선택사항)
`images/` 폴더에 이미지를 추가하면 더욱 완성도 높은 사이트가 됩니다.
자세한 내용은 `images/README.md`를 참고하세요.

### 3. 웹사이트 실행

#### 방법 1: 로컬 서버 (권장)
```bash
# Python 3가 설치되어 있다면
python -m http.server 8000

# 또는 Node.js가 있다면
npx serve .

# 브라우저에서 http://localhost:8000 열기
```

#### 방법 2: 직접 열기
`index.html` 파일을 더블클릭하여 브라우저에서 바로 열 수 있습니다.
(일부 기능은 로컬 서버 환경에서 더 잘 작동합니다)

## 🎨 디자인 컬러 팔레트

```css
--color-burgundy: #8B1E1E   /* 메인 브랜드 컬러 (딥 버건디 레드) */
--color-forest: #1E3A2F      /* 보조 컬러 (딥 포레스트 그린) */
--color-gold: #C89B3C        /* 포인트 컬러 (골드) */
--color-cream: #F8F6F0       /* 배경 컬러 (미색) */
--color-dark-gray: #2A2A2A   /* 텍스트 컬러 */
```

## ⌨️ 키보드 단축키

| 키 | 동작 |
|---|---|
| `↓` / `Page Down` | 다음 섹션으로 이동 |
| `↑` / `Page Up` | 이전 섹션으로 이동 |
| `Home` | 첫 번째 섹션으로 |
| `End` | 마지막 섹션으로 |
| `ESC` | 모달 닫기 |
| `Alt + 1` | 메인 컨텐츠로 |
| `Alt + 9` | 문의하기로 |

## 📱 모바일 기능

### 퀵 상담 바 (하단 고정)
- **전화상담**: 1877-5923 바로 연결
- **B2B 간편문의**: 문의 폼으로 즉시 이동

### 터치 제스처
- **상하 스와이프**: 섹션 간 이동
- **도트 터치**: 특정 섹션으로 바로 이동
- **길게 누르기**: 컨텍스트 메뉴 (기본 브라우저 기능)

## 🔧 커스터마이징

### 색상 변경
`style.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하세요:
```css
:root {
    --color-burgundy: #your-color;
    --color-forest: #your-color;
    /* ... */
}
```

### 섹션 추가/제거
1. `index.html`에서 `<section class="section">` 추가/제거
2. `index.html`의 페이지 인디케이터 도트 개수 조정
3. 필요시 `script.js`의 섹션 관련 로직 수정

### 폼 동작 변경
`script.js`의 `initContactForm()` 함수에서 폼 제출 로직을 수정하세요.
현재는 콘솔 로그만 출력하며, 실제 서비스에서는 서버 API 연동이 필요합니다.

```javascript
// 예시: 서버로 데이터 전송
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('문의가 접수되었습니다!');
})
.catch(error => {
    console.error('Error:', error);
});
```

## 🌐 배포하기

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/emfood.git
git push -u origin main

# Settings → Pages에서 main 브랜치 선택
```

### Netlify / Vercel
1. 프로젝트 폴더를 드래그 앤 드롭
2. 자동으로 빌드 및 배포 완료

### 일반 웹 호스팅
FTP로 모든 파일을 서버에 업로드하면 됩니다.

## 📊 성능 최적화

### 이미지 최적화
```bash
# ImageMagick 사용 예시
mogrify -resize 1920x1080 -quality 85 images/*.jpg
```

### CSS/JS 압축 (프로덕션용)
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

### 로딩 속도 개선
- 이미지 WebP 포맷 변환
- Lazy Loading 활성화
- CDN 사용 (폰트, 이미지)

## 🐛 문제 해결

### 스크롤이 부드럽지 않아요
- 브라우저의 "부드러운 스크롤" 설정 확인
- CSS `scroll-behavior: smooth` 지원 브라우저 사용
- 일부 구형 브라우저에서는 polyfill 필요

### 모바일에서 스냅이 작동하지 않아요
- 최신 버전의 모바일 브라우저 사용 (Chrome, Safari 권장)
- `touch-action: pan-y` CSS 속성 확인

### 이미지가 표시되지 않아요
- 이미지 파일 경로 확인 (`images/파일명.jpg`)
- 파일명 대소문자 일치 확인 (Linux 서버는 대소문자 구분)
- 브라우저 개발자 도구(F12) 콘솔에서 에러 확인

## 📞 연락처

**농업회사법인 이맛식품 주식회사**
- 대표자: 김기범
- 사업자등록번호: 693-86-02070
- 전화: 1877-5923 (김치광장)
- 주소: 충청북도 충주시 신니면 신석3길 1

## 📄 라이선스

Copyright ⓒ 농업회사법인 이맛식품 주식회사. All rights reserved.

---

## 🛠️ 기술 지원

웹사이트 관련 기술적인 문제가 있으시면:
1. 브라우저 콘솔(F12)에서 에러 메시지 확인
2. 브라우저 버전 업데이트
3. 캐시 삭제 후 재시도

**개발 정보**
- 버전: 1.0.0
- 최종 수정일: 2026년 9월 27일
- 호환 브라우저: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+
