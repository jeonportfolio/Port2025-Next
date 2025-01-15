import port01 from "../assets/img/port01.jpg"
import port001 from "../assets/img/port001.jpg"
import port02 from "../assets/img/port02.jpg"
import port03 from "../assets/img/port03.jpg"
import port04 from "../assets/img/port04.jpg"
import port05 from "../assets/img/port05.jpg"
import port06 from "../assets/img/port06.jpg"
import port07 from "../assets/img/port07.jpg"
import port08 from "../assets/img/port08.jpg"
import port09 from "../assets/img/port09.jpg"

import about from "../assets/img/about.jpg"

export const headerNav = [
    {
        title: "intro",
        url:"#intro"
    },
    {
        title: "skill",
        url:"#skill"
    },
    {
        title: "site",
        url:"#site"
    },
    {
        title: "portfolio",
        url:"#port"
    },
    {
        title: "contact",
        url:"#contact"
    }
        //ul li a 를 배열화 시켜준 것이다.
]

export const introText = {
    title:"SQA Portfolio",
    desc: ["사용기술스택 -> CLICK"],
    img: about
   
  }

  export const skillText = [
   
  ]


  export const siteText = [
    {
        text: ["Documenting", "My Project", "on the Blog&GITHUB"],
        title: "나의 프로젝트 깃허브 & 블로그에 기록하기",
        code: "https://github.com/jeonportfolio",
        view: "https://blog.naver.com/turtleweb",
        info: [ 
            "프로젝트를 깃허브 & 블로그에 기록하기",
        ],
    },
    
    {
        text: ["REACT.JS", "Wood Mode", "Portfolio Site"],
        title: "React.js 포트폴리오(첫번째 모드<나무 컨셉>)",
        code: "https://github.com/jeonportfolio/Port2025-React",
        view: "https://jsuport-react2025.netlify.app/",
        info: [
            "REACT.js portfolio",
            "use stack : React.js, SCSS, gsap",
        ],
    },
    {
        text: ["VUE.JS", "Rainbow Mode", "Portfolio Site"],
        title: "Vue.js 포트폴리오(세번째 모드<다크 컨셉>)",
        code: "https://github.com/jeonportfolio/Port2025-Vue",
        view: "https://jsuport-vue2025.netlify.app/",
        info: [
            "VUE.js portfolio",
            "use stack : Vue.js, SCSS, gsap",
        ],
    },
   
  ];




export const portText = [
    {
        num: "01",
        title: "할 일 기록 사이트(React)",
        desc: "할 일을 저장한 후 체크박스를 클릭하면 완료목록에 저장됩니다. 목록은 전체 & 할 일 & 완료로 필터링 됩니다. 입력한 데이터는 저장되며 수정 삭제가 가능합니다.",
        img: port001,
        code: "https://github.com/jeonportfolio/TodoList-Redux-",
        view: "https://today-todo-react.netlify.app/",
        name: "REACT 할 일 기록 사이트",
    },
    {
        num: "02",
        title: "영화검색 사이트(반응형)",
        desc: "Omdb API를 활용해 만든 영화 검색 사이트 입니다. 영화 제목 검색은 영어로만 입력이 가능합니다.",
        img: port06,
        code: "https://github.com/jeonportfolio/build-movie/tree/main",
        view: "https://moviebox-zeta.vercel.app/#/",
        name: "영화검색사이트",
    },
    {
        num: "03",
        title: "영화검색 사이트 & AI챗봇 추가",
        desc: "영어로 입력이 가능해 서칭이 불편한 점을 개선하기 위해 Chat Gpt API를 이용해 챗봇을 만들었습니다. 원하는 장르의 영화를 추천받고 해당 영화의 제목을 클릭하면 자동으로 영어제목이 검색창에 입력됩니다.",
        img: port07,
        code: "https://github.com/jeonportfolio/find-movie-typescript",
        view: "https://find-movie-typescript.vercel.app/#/",
        name: "영화검색사이트",
    },
    {
        num: "04",
        title: "나만의 유튜브 사이트(반응형)",
        desc: "자격증 및 개인 학습과정에서 도움을 받았던 영상들을 주제별로 모아놓은 사이트 입니다 유튜브의 검색도 가능하며 영상시청이 가능합니다. ★모바일에서 메뉴 생성은 로고클릭!! ",
        img: port02,
        code: "https://github.com/jeonportfolio/REACT-youtube",
        view: "https://react-myyoutube.netlify.app",
        name: "나만의 youtube",
    },
    {
        num: "05",
        title: "블로그 소개 페이지(PC버젼)",
        desc: "HTML/CSS/JavaScript를 사용하여 자격증/AWS/공모전 등 활동 기록들을 소개하는 페이지이며 저의 학습기록들을 기록한 해당 포스팅 열람이 가능합니다. Gsap 애니메이션을 활용하여 사용자 경험을 개선하였습니다. ",
        img: port03,
        code: "https://github.com/jeonportfolio/game-intro",
        view: "https://turtleweb.netlify.app/",
        name: "블로그 소개",
    },
    {
        num: "06",
        title: "게임 소개 페이지 (반응형)",
        desc: "JavaScript를 활용해 만든 3종 게임 소개 페이지입니다. 게임은 PC에서 가능하며 조작법법 설명과 사이트이동이 가능합니다.(새끼거북의 여행 & 지구를 지켜라 & 테트리스)",
        img: port05,
        code: "https://github.com/jeonportfolio/game-project",
        view: "https://gameintro.netlify.app",
        name: "GSAP게임소개",
    },
    {
        num: "07",
        title: "인턴과정 소개 (PC 버젼)",
        desc: "머니스테이션에서 금융 리서치 및 콘텐츠 제작 직무를 수행한 과정과 성과를 보여주는 사이트입니다. Gsap 애니메이션을 사용하였습니다.",
        img: port04,
        code: "https://github.com/jeonportfolio/GSAP-intern",
        view: "https://jeonportfolio.github.io/GSAP-intern/INTERN.html",
        name: "인턴과정 소개",
    },
    
    {
        num: "08",
        title: "사회적약자 대중교통 예약시스템",
        desc: "3명으로 구성된 팀 프로젝트로 사회적 약자들이 대중교통 이용에 불편함을 느끼는 것을 개선하고자 진행한 프로젝트입니다. 저는 버스 예약과 채팅 담당을 맡았으며 카카오 맵 & 공공데이터 포털 API 사용하였고 java script & jquery & python flask 서버를 활용하였습니다",
        img: port08,
        code: "https://github.com/jeonportfolio/python_bus_project",
        view: "https://blog.naver.com/turtleweb/223634853469",
        name: "영화검색사이트",
    },
    {
        num: "09",
        title: "웹디자인기능사 사이트 (PC버젼)",
        desc: "저의 웹디자인기능사 취득과정을 기록한 사이트 입니다. Figma를 사용해 직접 디자인하고  HTML & CSS를 웹디자인기능사 기술을 활용해 만든 사이트입니다. ",
        img: port01,
        code: "https://github.com/jeonportfolio/FIGMA-WEB",
        view: "https://jeonportfolio.github.io/FIGMA-WEB/figma%20portfolio.html",
        name: "웹디자인 기능사",
    },
    {
        num: "10",
        title: "한눈에 요약봇(진행중)",
        desc: "",
        img: port09,
        code: "https://github.com/jeonportfolio/Gpt-Summary-Site",
        view: "/",
        name: "Gpt 활용 요약 사이트",
    },
];


export const contactText = [

    {
        link: "mailto:etoile929@naver.com",
        title: "mail : etoile929@naver.com",
    },
  ];

  export const footerText = [
    {
        title: "github",
        desc: "깃헙",
        link: "https://github.com/jeonportfolio",
    },
    {
        title: "blog",
        desc: "블로그",
        link: "https://blog.naver.com/turtleweb",
    },
    {
        title: "Linked In",
        desc: "링크드인",
        link: "/",
    },
  ];