# 개발 블로그

https://docusaurus.io/ko/

## 글쓰기

- 왜 도큐사우루스인가?
- 글쓰기 자체에 집중 할 수 있다. (수정 및 확장이 쉽다.)
- 다크 모드 지원.

## 글쓰기 관련 자주 사용하는 팁

### [내부 링크 사용 방법](https://docusaurus.io/ko/docs/markdown-features/links)

```markdown
콘텐츠 루트(`/docs/`)를 기준으로 [링크](/otherFolder/doc4.md)를 작성할 수 있습니다.
사이트 디렉토리를 기준으로 [링크](/docs/otherFolder/doc4.md)를 작성할 수도 있지만 권장하지 않습니다.
```

### [draft 사용](https://docusaurus.io/ko/docs/api/plugins/@docusaurus/plugin-content-blog#draft)
    - 게시하고 싶지 않은 글의 경우 header에 draft: true 입력하면, 실제 배포시 게시 되지 않음.
    - blog/drafts 폴더 밑에 별도로 관리하면 갈끔하게 관리 가능

### 블로그 글 관리
- 하나의 포스트는 하나의 폴더로 관리 (폴더 내 index.md 파일 생성)
- 콘텐츠 별 폴더로 구분되기 때문에 관리가 쉬울 것으로 보인다.