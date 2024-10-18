# React Todo List 기술 과제

백엔드와 협업하기에 앞서, 우선 프론트엔드에서 데이터(상태)를 다루고 관리할 수 있는지 평가하고자 합니다.

```
🧑‍💻 React로 Todo List를 만들어주세요.
```

별도의 페이지 이동 없이 메인페이지(App.js)에서 가장 기본적인 CRUD(Create, Read, Update, Delete)를 구현해주세요.

- Create
  - 할일을 새로 추가한다.
- Read
  - 추가했던 항목을 바로 보여준다.
- Update
  - 추가했던 항목을 수정할 수 있다.
- Delete
  - 추가했던 항목을 삭제할 수 있다.

아래 필수 기능을 만들어주시고, 디자인 및 레이아웃은 자유롭게 꾸며주세요.

## 필수 기능

- **새로운 Todo 추가:** input에 할 일을 입력하고 "추가" 버튼을 클릭하여 새로운 항목을 추가할 수 있습니다.
- **완료 표시:** 할 일 항목을 완료 또는 미완료 상태로 표시할 수 있습니다.
- **Todo 수정:** 사용자는 기존 항목의 내용(제목, 완료여부)를 수정할 수 있습니다.
- **Todo 삭제:** 필요 없는 항목을 삭제할 수 있습니다.
- **Todo 필터링:** "전체," "완료," 또는 "미완료" 항목으로 리스트를 필터링할 수 있습니다.
- **로컬 스토리지 활용:** 페이지를 새로고침해도 항목이 유지됩니다.
- **스타일링:** 기본 css를 사용하시든, styled-components나 tailwindcss 등 원하시는 라이브러리를 사용하시든, 스타일링을 해주세요. 화려할 필요 없습니다.

## 주의사항

- 페이지 이동은 구현하실 필요 없으며, 파일이 길어지지 않도록 모듈을 분리하여 import/export 해주세요.
- 어떻게 구현할지는 정답이 없고 자유입니다.
- 필요에 따라 별도 라이브러리를 설치하셔도 됩니다.
- 어려우시면 ChatGPT 등 도움을 받으셔도 되지만, 주석으로 출처 및 이유를 남겨주세요.

## 주요 평가 항목

완벽함을 바라지 않습니다.
구현하실 수 있는 선에서 최선을 다해주세요.

- HTML (Semantic Tag, form 처리 등)
- CSS (선택자 구성 등)
- JavaScript (배열 처리 등)
- React (useState 등)
- 파일/컴포넌트 분리 (맥락이 있는가 등)

## 제출 방법

1. 이 레포지토리를 각자 계정으로 fork합니다.
    <img width="1497" alt="fork1" src="https://github.com/user-attachments/assets/edd3c054-e2d8-4bdd-9b0a-a457174ae33e">
    <img width="782" alt="fork2" src="https://github.com/user-attachments/assets/57b983e5-9156-40e3-a530-54616b00bcdc">


3. 자신의 계정에 생성된 fork 버전을 로컬 저장소에 클론합니다.

```bash
git clone https://github.com/{myGithubId}/react-todo-test.git
```

3. 필요한 패키지를 설치합니다.

```bash
npm install
```

4. 개발 서버를 띄워놓고 개발합니다.

```bash
npm start
```

5. 개발한 내용을 틈틈이 git 커밋으로 제대로 기록하시고, 푸시해주세요.

6. 제가 github에서 코드 및 커밋 내역을 보고 평가합니다.



메모
const { inputValue, updateStatus, ...rest } = todo;
return { ...rest, title: inputValue }

hook과 util에 차이