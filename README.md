오픈 날씨 API를 활용한 리액트 대시보드 만들기 강의 (스스로 해보기)

`npm install`

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

참고문서: https://ui.shadcn.com/docs/installation/vite

-리액트 라우터 설치: `npm install react-router-dom`

-리액트 카카오맵 API SDK 설치: `npm install react-kakao-maps-sdk`

--참고문서: https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro


***
스크롤바 숨기기: `npm install tailwind-scrollbar-hide`

Then add the plugin to your `tailwind.config.js` file:

```tsx
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}

```

참고문서: https://www.npmjs.com/package/tailwind-scrollbar-hide

***
separator가 출력되지 않아서 수정 예정


### 24.11.14 2:33 am

![image](https://github.com/user-attachments/assets/33392181-72db-49db-81de-2c30d8537ce7)
