# Ubittz React + TypeScript + Vite

## 개발환경 세팅

### Visual Studio Extensions

VS Code Extensions에서 아래 항목들 설치

- Prettier - Code formatter
- ESLint

### VSCode 설정

`CMD + ,` 로 Setting 화면 접근
Editor: Tab Size 설정을 2로 변경

Format On Save 설정 체크

`CMD + Shift + P`에서 `open user setting` 검색 후 JSON 파일 열기
아래 내용 추가

```
"editor.codeActionsOnSave": {
  "source.fixAll": "explicit"
}
```

---

## 프로젝트 시작

### 앱 기본 정보 수정

`vite.config.ts` 파일에서 수정

```
...
manifest: {
  ...
    name: 'App Name',       // 설치 배너에 표시되는 이름
    short_name: 'App Name', // 아이콘 아래에 표시되는 이름
  ...
}
...
```

### 앱 Icon 추가 (변경)

`/public/icon.svg` 경로의 아이콘 파일을 변경

---

## Default Styiling

### 공통 색상

`/src/constants/colors.ts`에 정의된 COLORS 상수에 각 프로젝트에 맞는 이름과 색상 코드를 작성

### Styled Components

`/src/assets/styles/GlobalStyle.tsx` 컴포넌트에서 앱 전체 기본 스타일 지정
`/src/assets/styles/styled.d.ts`경로에서 테마의 타입을 지정
`/src/assets/styles/theme.ts`경로에 각 버튼, 텍스트 컴포넌트에 맞게 스타일 지정

### Icon

`/src/constants/icons.tsx`에 사용할 아이콘을 SVG 형태로 추가
항상 기본으로 DefaultIconProps 타입으로 props를 받게 작성

```
export function ArrowLeftIcon(props: DefaultIconProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M11 5L5 12M5 12L11 19M5 12H19' stroke='#0C0C0E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
```

---

## Router & Page

### Path Prefix

모든 Path 앞에 붙는 Prefix를 설정하여 Path의 통일성을 가져감.
`.env` 파일 안에 `VITE_APP_ROUTE_PREFIX` 값을 수정

### Page Component 추가

`/src/pages/{name}/index.tsx` 경로에 Page Component 추가

**/src/pages/My/index.tsx**

```
const StyledMy = styled.div``;

function My() {
  return (
    <StyledMy>
      My 페이지입니다.
    </StyledMy>
  );
}

export default My;
```

### Route 추가

`/src/router/constants.ts` 에 정의되어있는 `PAGES`에 원하는 페이지 추가.
단, 메인 페이지들만 이 곳에 추가.
서브 페이지가 존재할 때는 아래 참고

**My 페이지 안에 payment, modify 페이지가 추가 될 때**

**/src/router/constants.ts - Page 추가**

```
export const PAGES = {
  LOGIN: '/',
  REGISTER: '/register',
  HOME: '/home',
  MY: '/my'
} as const;
```

**/src/router/index.tsx**

```
<Routes>
  <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
  ...
  <Route path={pathGenerator(PAGES.MY)} element={<My />} />
  <Route path={pathGenerator(`${PAGES.MY}/payment)} element={<MyPayment />} />
  <Route path={pathGenerator(`${PAGES.MY}/modify)} element={<ModifyInfo />} />
  ...
  <Route path='*' element={<Error />} />
</Routes>
```

---

## React Redux

### Reducer 추가

`src/stores/{name}/reducer.tsx` **경로에 폴더 및 파일 생성**

```

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HomeState } from '@@stores/home/types';

const initialState: HomeState = {
  currentDate: new Date(),
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setDate(state, { payload }: PayloadAction<Date>) {
      state.currentDate = payload;
    }
  },
});

export const { setDate } = homeSlice.actions;

export default homeSlice.reducer;

```

**/src/store/reducers.ts**

```
import { combineReducers } from 'redux';
import home from '@@stores/home/reducer';

export const rootReducers = combineReducers({ home });
```

**/src/store/types.ts**
주의 할 점 - 위에 reducers.ts에서 작성한 키와 AppState Interface에 들어간 키가 동일해야 함.

```

import { HomeState } from '@@stores/home/types';

export interface AppState {
  home: HomeState;
}

```

### useSelector

react-redux에서 기본으로 제공하는 useSelector가 아닌 `/src/store/hooks.ts`에 정의되어있는 useAppState를 사용할 것.
useSelector를 사용하면 Store에 등록 된 State들의 Type Tracking이 불가능.

### useActionSubscribe

특정 Action을 구독하는 Hooks

```
useActionSubscribe({
  type: fetchUserListSuccess.type,
  callback: () => {
    setLoading(false);
  }
});
```
