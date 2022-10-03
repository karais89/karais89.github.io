---
title: "FastAPI 입문 2 - 연습 예제"
authors: [karais89]
tags: [python, fastapi]
---

## 환경

- Windows 10
- Pycharm 2021.1.2
- [Github](https://github.com/karais89/home-fast-api)

## 포스팅 목적

- FastAPI의 사용 방법에 대해 학습 용도.
- 다듬어진 포스팅만 작성하려고 하니 글 자체를 작성하지 않게 되버리는 것 같아, 우선 포스팅을 하고 수정 및 계속해서 작성하는 형태로 변경. 실제 글은 영양가가 없을 가능성이 큽니다.
- 기본적으로 FastAPI 문서 자체를 번역 하는 형태를 취할 예정이고, 구글 번역을 바탕으로 진행할 예정이라 영어에 익숙한 분들은 원문을 보는게 더 좋을 것 같습니다.

## 0. Example

```python
from typing import Optional

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
```

```bash
uvicorn main:app --reload
```

- [http://127.0.0.1:8000/items/5?q=somequery](http://127.0.0.1:8000/items/5?q=somequery)
- JSON 응답은 다음과 같이 표시됩니다.

```json
{"item_id": 5, "q": "somequery"}
```

- 다음과 같은 API를 만들었습니다.
    - 경로 `/` 및 `/items/{item_id}`에서 HTTP 요청을 수신합니다.
    - 두 경로 모두 `GET` 작업 (HTTP 메서드라고도 함)을 사용합니다.
    - 경로 `/items/{item_id}`에는 `int` 여야 하는 경로 매개 변수 `item_id`가 있습니다.
    - 경로 `/items/{item_id}`에는 선택적 `str` 쿼리 매개 변수 `q`가 있습니다.

## 1. Example 업그레이드

이제 `PUT` 요청에서 본문을 수신하도록 [main.py](http://main.py/) 파일을 수정하십시오.

Pydantic 덕분에 표준 Python 유형을 사용하여 본문을 선언하십시오.

```python
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
```

요약하면 매개 변수, 본문 등의 유형을 함수 매개 변수로 한 번 선언합니다.

표준 최신 Python 유형을 사용하여 수행합니다.

새로운 구문, 특정 라이브러리의 메서드 또는 클래스 등을 배울 필요가 없습니다.

표준 Python 3.6 이상입니다.

예를 들어 int의 경우 :

```python
item_id: int
```

또는 더 복잡한 `Item` 모델의 경우 :

```python
item: Item
```

.. 그 단일 선언으로 다음을 얻을 수 있습니다.

- 편집기 지원
    - 자동 완성
    - 타입 체크
- 데이터 유효성
    - 데이터가 유효하지 않은 경우 자동 및 명확한 오류.
    - 깊이 중첩 된 JSON 개체에 대한 유효성 검사.
- 입력 데이터 변환 : 네트워크에서 Python 데이터 및 유형으로. 읽기 :
    - JSON
    - 경로 매개 변수
    - 쿼리 매개 변수
    - 쿠키
    - 헤더
    - Forms
    - 파일
- 출력 데이터 변환 : Python 데이터 및 유형에서 네트워크 데이터 (JSON)로 변환 :
    - Python 유형 (str, int, float, bool, list 등)을 변환합니다.
    - datetime 객체.
    - UUID 개체.
    - 데이터베이스 모델
    - 그리고 더 많은 것들
- 2 개의 대체 사용자 인터페이스를 포함한 자동 대화 형 API 문서
    - Swagger UI.
    - ReDoc.

이전 코드 예제로 돌아가서 FastAPI는 다음을 수행합니다.

- `GET` 및 `PUT` 요청에 대한 경로에 `item_id`가 있는지 확인합니다.
- `item_id`가 `GET` 및 `PUT` 요청에 대해 `int` 유형인지 확인합니다.
    - 그렇지 않은 경우 클라이언트에 유용하고 명확한 오류가 표시됩니다.
- `GET` 요청에 대해 `q`([http://127.0.0.1:8000/items/foo?q=somequery](http://127.0.0.1:8000/items/foo?q=somequery))라는 선택적 쿼리 매개 변수가 있는지 확인합니다.
    - `q` 매개 변수는 `= None`으로 선언되므로 선택 사항입니다.
    - `None`이 없으면 필요합니다 (`PUT`의 경우 본문처럼).
- `/items/{item_id}`에 대한 `PUT` 요청의 경우 본문을 JSON으로 읽습니다.
    - `str`이어야하는 필수 속성 `name`이 있는지 확인
    - `float`이어야하는 필수 속성 `price`이 있는지 확인
    - 선택적인 속성 `is_offer`가 있는지 확인 (있는 경우 `bool`이어야 함).
    - 이 모든 것은 깊이 중첩 된 JSON 객체에서도 작동합니다.
- JSON으로 자동으로 변환합니다.
- OpenAPI로 모든 것을 자동으로 문서화.
    - 대화 형 문서 시스템.
    - 여러 언어에 대한 자동 클라이언트 코드 생성 시스템.
- 2 개의 대화 형 문서 웹 인터페이스를 자동으로 제공합니다.

우리는 예제 코드를 통해 모든 것이 어떻게 작동하는지에 대한 아이디어를 얻었습니다.

다음과 같이 줄을 변경하십시오.

```python
return {"item_name": item.name, "item_id": item_id}
```

에서

```python
... "item_name": item.name ...
```

으로

```python
... "item_price": item.price ...
```

... 편집기가 속성을 자동 완성하는 방법과 속성 유형을 확인합니다.

더 많은 기능을 포함하는 완전한 예는 [튜토리얼-사용자 가이드](https://fastapi.tiangolo.com/tutorial/)를 참조하십시오

스포일러 경고 : [튜토리얼-사용자 가이드](https://fastapi.tiangolo.com/tutorial/)에는 다음이 포함됩니다.

- 헤더, 쿠키, 양식 필드 및 파일과 같은 다른 위치의 매개 변수 선언.
- 유효성 검사 제약 조건을 maximum_length 또는 regex로 설정하는 방법
- 매우 강력하고 사용하기 쉬운 **의존성 주입 시스템**.
- **JWT 토큰** 및 HTTP 기본 인증을 사용한 **OAuth2** 지원을 포함한 보안 및 인증.
- (Pydantic 덕분에) **깊게 중첩 된 JSON 모델**을 선언하기 위한 더 진보 된 (하지만 똑같이 쉬운) 기술.
- 많은 추가 기능 (Starlette 덕분에)
    - **웹소켓**
    - **GraphQL**
    - `requests` 및 `pytest`를 기반으로하는 매우 쉬운 테스트
    - **CORS**
    - **쿠키세션**
    - 조금더 많은 것들

## 2. 성능

독립적 인 TechEmpower 벤치 마크에 따르면 Uvicorn에서 실행되는 FastAPI 애플리케이션은 사용 가능한 가장 빠른 Python 프레임 워크 중 하나입니다.

이에 대한 자세한 내용은 벤치 마크 섹션을 참조하십시오.

## 3. 선택적 종속성 패키지

Pydantic에서 사용 :

- ujson - 더 빠른 JSON "파싱"용.
- email_validator - 이메일 검증 용.

Starlette에서 사용 :

- requests - TestClient를 사용하려는 경우 필수입니다.
- aiofiles - FileResponse 또는 StaticFiles를 사용하려는 경우 필요합니다.
- jinja2 - 기본 템플릿 구성을 사용하려는 경우 필요합니다.
- python-multipart - request.form()을 사용하여 "파싱"양식을 지원하려는 경우 필요합니다.
- itsdangerous - SessionMiddleware 지원에 필요합니다.
- pyyaml - Starlette의 SchemaGenerator 지원에 필요합니다 (FastAPI에서는 필요하지 않을 수 있음).
- graphene - GraphQLApp 지원에 필요합니다.
- ujson - UJSONResponse를 사용하려는 경우 필요합니다.

FastAPI/Starlette에서 사용 :

- uvicorn - 애플리케이션을 로드하고 제공하는 서버용.
- orjson - ORJSONResponse를 사용하려는 경우 필수

이 모든 것을 `pip install fastapi[all]`로 설치할 수 있습니다.

## 4. 결론

- FastAPI를 사용하여, 간단하고 빠르게 개발이 가능하다.
    - FastAPI 내부에서 여러가지 도움이 될만한 작업들을 수행한다. (개발자가 신경 쓰지 않아도 된다.)