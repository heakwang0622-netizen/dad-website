# 전체 프로젝트 가이드 (guide.md)

## 1) 프로젝트 목표
- 설비 회사 소개 + 서비스 안내 + 문의 접수 기능 제공
- 프론트엔드와 백엔드를 분리해 유지보수성과 확장성 확보

## 2) 기술 스택 요약
- 프론트엔드: React(Next.js) + TypeScript + Tailwind CSS
- 백엔드: FastAPI + SQLAlchemy + Pydantic
- 데이터베이스: SQLite

## 3) 기능 범위 (v1)
- 홈 페이지
- 서비스 소개 페이지
- 문의 페이지(폼 UI)
- 문의 API 등록/조회
- SQLite 기반 데이터 저장

## 4) 개발 순서 권장
1. 프론트 기본 라우팅/레이아웃 구현
2. FastAPI 프로젝트 초기 구성
3. DB 모델/스키마 구성
4. 문의 API 구현
5. 프론트 문의 폼 API 연동
6. 통합 테스트 및 배포

## 5) 로컬 실행 가이드
### 프론트엔드
```bash
npm install
npm run dev
```
- 기본 주소: `http://localhost:3000`

### 백엔드 (예시)
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
- 기본 주소: `http://localhost:8000`

## 6) 연동 규칙
- 프론트는 환경변수로 API 베이스 URL 관리
  - 예: `NEXT_PUBLIC_API_BASE_URL=http://localhost:8000`
- CORS 설정에서 프론트 도메인 허용 필수

## 7) 테스트 체크리스트
- 홈/서비스/문의 페이지 진입 가능
- 문의 폼 필수값 검증
- 문의 API 정상 등록/실패 응답 확인
- DB에 문의 데이터 저장 확인

## 8) 배포 권장안
- 프론트: Vercel 또는 정적 호스팅
- 백엔드: VM/컨테이너 기반 배포
- DB: 초기 SQLite, 확장 시 PostgreSQL 전환

## 9) 유지보수 전략
- 문서 우선 업데이트 원칙(front/backend/db/guide 동기화)
- API 변경 시 프론트 타입 정의도 함께 갱신
- 월 1회 의존성 업데이트 및 보안 점검
