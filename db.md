# 데이터베이스 설계 명세서 (db.md)

## 1) DB 개요
- 엔진: SQLite
- 목적: 서비스 목록/문의 데이터 저장
- 파일 위치 예시: `backend/app/data.db`

## 2) 테이블 설계

### 2.1 services
| 컬럼명 | 타입 | 제약조건 | 설명 |
|---|---|---|---|
| id | INTEGER | PK, AUTOINCREMENT | 서비스 고유 ID |
| name | TEXT | NOT NULL, UNIQUE | 서비스명 |
| description | TEXT | NOT NULL | 서비스 상세 설명 |
| is_active | INTEGER | NOT NULL, DEFAULT 1 | 활성 여부 (1/0) |
| created_at | TEXT | NOT NULL | 생성 시각(ISO8601) |
| updated_at | TEXT | NOT NULL | 수정 시각(ISO8601) |

### 2.2 inquiries
| 컬럼명 | 타입 | 제약조건 | 설명 |
|---|---|---|---|
| id | INTEGER | PK, AUTOINCREMENT | 문의 고유 ID |
| name | TEXT | NOT NULL | 고객명 |
| phone | TEXT | NOT NULL | 연락처 |
| message | TEXT | NOT NULL | 문의 내용 |
| status | TEXT | NOT NULL, DEFAULT 'received' | 처리 상태 |
| created_at | TEXT | NOT NULL | 접수 시각(ISO8601) |

## 3) 인덱스 설계
- `services(name)` UNIQUE 인덱스
- `inquiries(created_at DESC)` 조회 최적화 인덱스
- `inquiries(status, created_at)` 상태별 목록 조회용 복합 인덱스

## 4) 상태값 정의
- `received`: 접수 완료
- `in_progress`: 처리 중
- `done`: 처리 완료
- `cancelled`: 취소

## 5) SQL 예시
```sql
CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'received',
  created_at TEXT NOT NULL
);

CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX idx_inquiries_status_created_at ON inquiries(status, created_at DESC);
```

## 6) 운영 가이드
- 하루 1회 DB 파일 백업 권장
- 상태 변경 이력 관리가 필요해지면 `inquiry_histories` 테이블 추가
- 트래픽 증가 시 PostgreSQL 마이그레이션 고려
