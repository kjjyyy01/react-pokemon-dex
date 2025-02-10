# Pokemon Dex

</div>

## 📝 소개

📅개발 기간: 2025.02.03 ~ 2025.02.10

개인 과제 포켓몬 도감 만들기 "Pokemon Dex"입니다.

<br />

### 💬 배포 링크

https://react-pokemon-dex-black.vercel.app/

### ✨ 화면 구성

![Image](https://github.com/user-attachments/assets/e0521b4e-f212-4201-a849-adfc55f708c6)
![Image](https://github.com/user-attachments/assets/7862bb9c-4d62-4520-915f-0fe7c1fd926b)
![Image](https://github.com/user-attachments/assets/4eb5022a-7fef-456e-a347-b9e2f91b7aa1)
<br />

## 📄 기능 소개

- 포켓몬 목록페이지에서 `추가`버튼을 누르면 대시보드로 추가되는 기능
- 추가된 포켓몬을 `취소`하는 기능
- 추가 버튼 영역을 제외한 카드 영역을 클릭했을 때 상세 정보 확인할 수 있는 기능

<br />

## ⚙ 기술 스택

### Structure

<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="80" alt="html5 logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="80" alt="css3 logo"  />
<div />
<br />
    
### Development
<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="80" alt="javascript logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="80" alt="react logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="80" alt="redux logo"  />
</div>

<br />

## 🤔 트러블 슈팅

- eslint 설정 2가지! (https://velog.io/@kjjyyy01/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-eslint-%EC%84%A4%EC%A0%95-2%EA%B0%80%EC%A7%80)


<br />

## 📁 프로젝트 구조

```
📁
pokemon-dex
├─ 📁data
│  └─ Mock_Data.js
├─ 📁public
│  ├─ monsterBall-img.png
│  ├─ pokemon-logo-img.png
│  └─ website-logo.png
├─ 📁src
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ 📁components
│  │  ├─ Dashboard.jsx
│  │  ├─ GlobalStyle.jsx
│  │  ├─ PokemonCard.jsx
│  │  ├─ PokemonList.jsx
│  │  └─ Style.jsx
│  ├─ 📁pages
│  │  ├─ Detail.jsx
│  │  ├─ Dex.jsx
│  │  └─ Home.jsx
│  ├─ 📁redux
│  │  ├─ 📁config
│  │  │  └─ store.js
│  │  └─ 📁slices
│  │     └─ pokemonSlices.js
│  └─ 📁shared
│     └─ Router.jsx
├─ index.html
├─ README.md
```

<br />

## 프로젝트 소감

- 이번 과제는 많은 것을 사용해볼 수 있는 과제였다. useState로 상태관리, prop drilling, useContext로 전역 상태 관리, redux tool kit으로 전역 상태 관리, ui 라이브러리 사용, 등 다양한 것을 사용했다. 물론 처음 배우고 바로 응용해본 것이기 때문에 완벽하진않았다. 하지만 전역 상태 관리에 대한 흐름을 직접 경험해보면서 prop drilling을 효율적으로 처리하는 방법을 몸소 느낄 수 있었다. <br/> 진행 하면서 느낀점은 자바스크립트 메서드에 나도 모르게 익숙해져있었다. 물론 완벽하진 않다. 처음 자바스크립트로 과제했을 때를 생각하면 많이 익숙해진 것이다. 반면 아쉬웠던 점은 css 스타일링을 하는 부분이다. css를 공부가 필요하다고 느꼈다. 또한 react에 대한 복습이 필요하다고 느꼈다. 아직 코드를 작성할 때 생각이 나지 않는 부분이 많았다. 시간이 날 때 react를 처음부터 복습하며 이전 과제에 적용해보며 공부 할 것이다.<br/>
  이제 다음은 팀프로젝트인데 잘 할 수있을지 걱정이된다. 팀원들과 멋진 프로젝트를 완성하기위해서 react 복습을 서둘러야겠다.
