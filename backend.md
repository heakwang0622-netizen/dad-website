# 백엔드 개발 명세서 (backend.md)

## 1) 목적
- 프론트엔드 문의 폼 데이터를 저장/조회할 API 제공
- 서비스 목록 데이터를 관리/전달
- 경량 운영이 가능한 FastAPI + SQLite 기반 백엔드 구성

## 2) 기술 스택
- Python 3.11+
- FastAPI
- Uvicorn
- SQLAlchemy (ORM)
- Pydantic (요청/응답 스키마 검증)
- SQLite

## 3) 권장 디렉토리 구조
```text
backend/
  app/
    main.py
    database.py
    models.py
    schemas.py
    routers/
      services.py
      inquiries.py
  requirements.txt
```

## 4) API 명세
### 4.1 서비스 조회
- `GET /api/services`
- 설명: 프론트 서비스 페이지에 표시할 서비스 목록 조회
- 응답 예시:
```json
[
  {
    "id": 1,
    "name": "하수구막힘",
    "description": "고압 세척 및 내시경 진단"
  }
]
```

### 4.2 문의 등록
- `POST /api/inquiries`
- 요청 바디:
```json
{
  "name": "홍길동",
  "phone": "010-0000-0000",
  "message": "싱크대 배수가 안됩니다."
}
```
- 응답 바디:
```json
{
  "id": 101,
  "status": "received",
  "created_at": "2026-04-27T12:00:00Z"
}
```

### 4.3 문의 목록 조회 (관리자용)
- `GET /api/inquiries`
- 기본 정렬: `created_at DESC`
- 페이징: `?page=1&size=20`

## 5) 검증/보안 요구사항
- 입력값 검증
  - 이름: 2~30자
  - 연락처: 숫자/하이픈 패턴 검증
  - 문의내용: 최소 5자 이상
- CORS 허용 도메인 지정
- SQL 인젝션 방지: ORM 바인딩 사용
- 운영 단계에서 간단한 관리자 인증(토큰 기반) 추가 권장

## 6) 에러 응답 규약
- 400: 유효성 검증 실패
- 404: 리소스 없음
- 500: 서버 내부 오류
- 공통 포맷:
```json
{
  "error_code": "VALIDATION_ERROR",
  "message": "phone 형식이 올바르지 않습니다."
}
```

## 7) 실행/배포 기준
- 개발 실행: `uvicorn app.main:app --reload`
- DB 파일: `backend/app/data.db`
- 배포 환경변수:
  - `APP_ENV`
  - `CORS_ORIGINS`
  - `ADMIN_TOKEN` (관리자 API 보호 시)
