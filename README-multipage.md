# 이맛식품 - Multi-Page 웹사이트

농업회사법인 이맛식품 주식회사의 공식 기업 홈페이지입니다.
전통적인 **다중 페이지(Multi-Page)** 구조로 제작된 프로페셔널한 반응형 웹사이트입니다.

## 🎨 프로젝트 개요

### 기술 스택
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 반응형 미디어 쿼리
- **Vanilla JavaScript**: 외부 라이브러리 없음
- **Pretendard Variable Font**: 웹폰트 CDN

### 주요 특징
- ✅ 독립된 5개 페이지 구성 (전통적 멀티 페이지 방식)
- ✅ Mobile-First 반응형 디자인
- ✅ 햄버거 메뉴 (모바일 네비게이션)
- ✅ 모바일 퀵 액션 바 (하단 고정)
- ✅ 인증서 모달 팝업 기능
- ✅ 제품 탭 전환 UI
- ✅ 폼 자동 유효성 검사

## 📂 프로젝트 구조

```
emfood/
├── index.html              # 메인 홈페이지
├── about.html              # 회사 소개
├── quality.html            # 위생 및 HACCP 인증
├── products.html           # 제품 소개
├── contact.html            # B2B 납품 및 상담 문의
├── css/
│   └── style.css          # 공통 스타일시트
├── js/
│   └── main.js            # 메인 JavaScript
├── images/
│   ├── README.md          # 이미지 가이드
│   ├── kimchi-hero.jpg    (메인 배경)
│   ├── cert-haccp.jpg     (HACCP 인증서)
│   ├── cert-factory.jpg   (공장등록증)
│   ├── cert-business.jpg  (사업자등록증)
│   └── kimchi-*.jpg       (제품 사진)
└── README-multipage.md    # 프로젝트 설명서
```

## 📄 페이지 구성

### 1. index.html (메인 홈)
- **히어로 섹션**: 프리미엄 배너 이미지
- **3대 약속**: 정직, 청결, 신뢰 카드
- **위생 설비**: HACCP 요약 소개
- **제품 미리보기**: 주요 김치 6종
- **B2B 상담 배너**: 대량 납품 유도

### 2. about.html (회사 소개)
- **회사 개요**: 기업 소개
- **CEO 인사말**: 대표이사 김기범
- **기업 가치**: 6개 핵심 가치 카드
- **제조 시설**: 658㎡ 규모 안내
- **찾아오시는 길**: 주소 및 지도

### 3. quality.html (위생·인증)
- **국가 공인 인증서**: HACCP, 공장등록증, 사업자등록증 (클릭 시 모달 팝업)
- **HACCP 설명**: 7원칙 상세 소개
- **3대 위생 공정**: 세척 → 검출 → 저온 유지
- **제조 시설 특징**: 6개 위생 시스템
- **품질 약속**: 5가지 보증 사항

### 4. products.html (제품 소개)
- **탭 UI**: [가정용 김치] / [업소용 대량]
- **가정용 제품**: 포기김치, 백김치, 총각김치, 열무김치, 갓김치, 깍두기
- **업소용 안내**: 대용량 규격, 맞춤형 숙성도, 경쟁력 가격
- **주요 납품처**: 식당, 급식소, 기업, 유통망
- **구매 방법**: 온라인, 제휴점, 전화

### 5. contact.html (견적 문의)
- **빠른 상담**: 전화, 김치광장, 온라인
- **B2B 견적 폼**: 업체명, 담당자, 연락처, 품목, 예상 납품량
- **찾아오시는 길**: 주소 및 연락처
- **전국 제휴**: 김치광장 QR 포스터 안내
- **고객센터**: 1877-5923 상담 안내

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--color-burgundy: #8B1E1E   /* 메인 브랜드 컬러 */
--color-forest: #1E3A2F     /* 보조 컬러 (위생) */
--color-gold: #C89B3C       /* 포인트 컬러 */
--color-cream: #F8F6F0      /* 배경 컬러 */
--color-dark: #2A2A2A       /* 텍스트 컬러 */
```

### 타이포그래피
- **본문**: Pretendard Variable
- **크기**: 반응형 clamp() 함수 사용
- **줄간격**: 1.6 ~ 1.9 (가독성 최적화)

### 레이아웃
- **컨테이너**: 최대 1200px (콘텐츠), 1400px (와이드)
- **그리드**: CSS Grid (auto-fit, minmax)
- **카드**: 호버 시 Y축 이동 효과

## 🚀 실행 방법

### 1. 로컬 서버 실행 (권장)

#### Python 서버
```bash
cd C:\Users\Lenovo\Desktop\emfood
python -m http.server 8000
```

#### Node.js 서버
```bash
npx serve .
```

#### PHP 서버
```bash
php -S localhost:8000
```

그 다음 브라우저에서 `http://localhost:8000` 접속

### 2. 직접 열기
`index.html` 파일을 더블클릭하여 브라우저에서 바로 실행 가능

### 3. VS Code Live Server
VS Code 확장 프로그램 "Live Server" 설치 후 실행

## 💡 주요 기능

### 헤더 (GNB)
- **고정 네비게이션**: 스크롤 시 상단 고정
- **현재 페이지 표시**: 활성 링크 하이라이트
- **모바일 햄버거 메뉴**: 768px 이하에서 토글 메뉴
- **견적문의 CTA**: 강조된 버튼

### 모바일 퀵 액션 바
- **하단 고정**: 모바일에서 항상 표시
- **전화 상담**: `tel:1877-5923` 링크
- **견적 신청**: contact.html 이동

### 인증서 모달
- **클릭 팝업**: 인증서 카드 클릭 시 확대
- **ESC 닫기**: 키보드 단축키 지원
- **배경 클릭 닫기**: 오버레이 클릭 시 닫힘

### 제품 탭
- **가정용/업소용**: 클릭으로 탭 전환
- **애니메이션**: Fade-in 효과

### 폼 검증
- **전화번호 자동 포맷**: 하이픈 자동 삽입
- **필수 항목 검사**: HTML5 validation
- **성공 메시지**: alert 표시 (실제 서버 연동 필요)

## 📱 반응형 브레이크포인트

```css
/* Desktop */
@media (min-width: 1025px) { ... }

/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) {
    - 햄버거 메뉴 활성화
    - 모바일 퀵 바 표시
    - 단일 컬럼 레이아웃
    - 터치 최적화
}

/* Small Mobile */
@media (max-width: 480px) {
    - 폰트 크기 축소
    - 패딩 조정
}
```

## 🎯 커스터마이징

### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
    --color-burgundy: #YOUR_COLOR;
    --color-forest: #YOUR_COLOR;
    --color-gold: #YOUR_COLOR;
}
```

### 내용 수정
각 HTML 파일에서 텍스트 직접 수정 가능

### 이미지 교체
`images/` 폴더에 동일한 파일명으로 이미지 교체

### 폼 서버 연동
`js/main.js`의 `initFormValidation()` 함수에서 서버 API 연동:

```javascript
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

## 🌐 배포 방법

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/emfood.git
git push -u origin main

# Settings → Pages → main 브랜치 선택
```

### Netlify / Vercel
1. 프로젝트 폴더를 드래그 앤 드롭
2. 자동 빌드 및 배포 완료

### 일반 웹 호스팅
FTP로 모든 파일을 서버 루트 디렉토리에 업로드

## 📊 성능 최적화

### 이미지 최적화
- **해상도**: 히어로 1920x1080px, 제품 800x600px
- **포맷**: JPEG (사진), PNG (문서)
- **용량**: 1MB 이하 권장

### CSS/JS 압축 (프로덕션)
```bash
# CSS Minify
npx clean-css-cli -o css/style.min.css css/style.css

# JS Minify
npx terser js/main.js -o js/main.min.js -c -m
```

### Lazy Loading
JavaScript에 이미지 Lazy Loading 코드 포함됨:
```html
<img data-src="images/example.jpg" alt="...">
```

## 🐛 문제 해결

### 이미지가 표시되지 않아요
- 이미지 파일 경로 확인 (`images/파일명.jpg`)
- 파일명 대소문자 일치 확인
- 브라우저 개발자 도구(F12) 콘솔 확인

### 모바일 메뉴가 작동하지 않아요
- `js/main.js` 파일이 정상 로드되었는지 확인
- 브라우저 콘솔에서 JavaScript 오류 확인

### 폼 제출이 안 돼요
- 현재는 콘솔 로그만 출력되도록 설정
- 실제 서버 API 연동이 필요함

## 📞 회사 정보

**농업회사법인 이맛식품 주식회사**
- 대표이사: 김기범
- 사업자등록번호: 693-86-02070
- 주소: 충청북도 충주시 신니면 신석3길 1, 1층
- 전문판매원: 김치광장
- 대표전화: 1877-5923

## 📄 라이선스

Copyright ⓒ 농업회사법인 이맛식품 주식회사. All rights reserved.

---

## 🛠️ 기술 지원

### 브라우저 호환성
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

### 개발 환경
- 버전: 2.0.0 (Multi-Page)
- 최종 수정: 2026년 9월 27일
- 제작: 웹 프론트엔드 전문 퍼블리셔

---

## 📚 추가 문서

- `images/README.md` - 이미지 가이드
- `README.md` - 원페이지 버전 문서 (이전 버전)

## 🎉 완성!

이제 모든 페이지가 준비되었습니다. 
브라우저에서 `index.html`을 열어 확인해보세요!
