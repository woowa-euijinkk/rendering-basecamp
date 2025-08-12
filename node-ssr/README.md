# Node.js SSR with TypeScript

Express.js와 TypeScript를 사용한 서버 사이드 렌더링(SSR) 프로젝트입니다.

## 🚀 기능

- **TypeScript**: 타입 안전성과 개발 생산성 향상
- **Express.js**: 빠르고 간단한 웹 서버 프레임워크
- **서버 사이드 렌더링**: HTML을 서버에서 생성하여 전송
- **TMDB API 연동**: axios를 사용한 외부 API 호출
- **Service Layer**: 비즈니스 로직과 API 호출 분리
- **개발 모드**: 코드 변경 시 자동 재시작 (nodemon + ts-node)
- **프로덕션 빌드**: TypeScript를 JavaScript로 컴파일

## 📦 설치된 패키지

### 의존성 (Dependencies)

- `express`: 웹 애플리케이션 프레임워크

### 개발 의존성 (Dev Dependencies)

- `typescript`: TypeScript 컴파일러
- `@types/node`: Node.js 타입 정의
- `@types/express`: Express.js 타입 정의
- `ts-node`: TypeScript를 직접 실행
- `nodemon`: 파일 변경 감지 및 자동 재시작

## 🛠️ 사용법

### 개발 모드 실행

```bash
npm run dev
```

- TypeScript 파일을 직접 실행
- 파일 변경 시 자동 재시작
- 포트: 3000 (기본값)

### 프로덕션 빌드

```bash
npm run build
```

- TypeScript를 JavaScript로 컴파일
- 빌드 결과는 `dist/` 폴더에 저장

### 프로덕션 실행

```bash
npm start
```

- 빌드된 JavaScript 파일 실행

### 빌드 파일 정리

```bash
npm run clean
```

- `dist/` 폴더 삭제

## 📁 프로젝트 구조

```
node-ssr/
├── src/
│   └── server.ts          # TypeScript 서버 코드
├── dist/                  # 컴파일된 JavaScript 파일
├── tsconfig.json          # TypeScript 설정
├── package.json           # 프로젝트 설정 및 의존성
└── README.md             # 프로젝트 설명
```

## 🌐 엔드포인트

### 웹 페이지

- `GET /`: 영화 리뷰 메인 페이지 (SSR HTML)

### API 엔드포인트

- `GET /api/movies/popular`: 인기 영화 목록
- `GET /api/movies/now-playing`: 현재 상영 중인 영화
- `GET /api/movies/top-rated`: 평점 높은 영화
- `GET /api/movies/upcoming`: 개봉 예정 영화
- `GET /api/movies/search?q=검색어&page=1`: 영화 검색
- `GET /api/movies/:id`: 영화 상세 정보

### API 사용 예시

```bash
# 인기 영화 조회
curl http://localhost:8080/api/movies/popular

# 영화 검색
curl "http://localhost:8080/api/movies/search?q=인사이드아웃"

# 영화 상세 정보
curl http://localhost:8080/api/movies/1022789
```

## ⚙️ TypeScript 설정

`tsconfig.json`에서 다음과 같은 설정을 사용합니다:

- **Target**: ES2020
- **Module**: CommonJS
- **Strict Mode**: 활성화
- **Source Maps**: 활성화
- **Declaration Files**: 생성

## 🔧 개발 팁

1. **타입 체크**: `npx tsc --noEmit`로 컴파일 없이 타입만 확인
2. **포트 변경**: 환경변수 `PORT`로 포트 설정 가능
3. **환경 설정**: `NODE_ENV` 환경변수로 개발/프로덕션 모드 구분

## 📝 다음 단계

- [ ] 템플릿 엔진 추가 (EJS, Handlebars 등)
- [ ] 정적 파일 서빙 설정
- [ ] 로깅 시스템 구축
- [ ] 환경 변수 관리 (.env)
- [ ] 에러 핸들링 미들웨어
- [ ] 테스트 코드 작성
