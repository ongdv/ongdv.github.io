import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'OngDV | Web Developer', // e.g: 'Name | Developer'
  lang: 'KR', // e.g: en, es, fr, jp
  description: '오경우 포트폴리오', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하세요, 저는',
  name: '오경우',
  subtitle: '개발자입니다.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `개발과 사진에 애착을 가지는 개발자 오경우입니다.`,
  paragraphTwo: `현재 웹개발을 주로 하고 있으며 프론트엔드와 백엔드 둘 다 좋아합니다. 프론트 엔드 개발을 좋아하지만, 시스템 요구사항이나 백엔드 개발을 활용하고, 프론트 엔드에 가중치를 두는 프로젝트를 선호합니다.`,
  paragraphThree: `언제나 최신동향을 따라가려 노력하며, 스스로 배운 것을 주위 사람들에게 가르쳐주며 스터디하는 것을 좋아합니다. 아직 스스로에게 '개발자'라는 호칭을 쓰는 것은 모자라다고 판단합니다. 당신이 저를 개발자라는 호칭이 적합한지 알려주세요.`,
  stack: `HTML, CSS, JS ★★★★★
React.js ★★★★☆
Vue.js ★★★★☆
Spring(Boot) ★★★★☆
Express ★★★★☆
Flask ★★★★☆
AWS ★★★★☆
MySQL ★★★☆☆`,
  resume: 'https://sites.google.com/view/ongdv-resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '푸드트럭 매칭 시스템 - Giftluck',
    info: `부산의 대표적인 푸드트럭 업체 '푸드트래블'과 함께 진행한 프로젝트입니다.
    푸드트럭의 수요가 많아져서 많은 사람들이 푸드트럭의 케이터링 서비스와 푸드트럭 렌탈에 관심을 많이 쏟고 있으며, 이를 위한 매칭 시스템입니다.`,
    info2: `React ★★★★★
Express ★★★★★
MySQL ★★★☆☆
NCloud ★★★★☆`,
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '문서 기반 화상회의 솔루션 - Livecon',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    info2: `React ★★★★★
Express ★★★★☆
PostgreSQL ★★★☆☆
Jitsi ★★☆☆☆`,
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '비대면 문진 시스템 - CheeU',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    info2: `React ★★★★★
Express ★★★★★
MySQL ★★★☆☆
AWS ★★★★★`,
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '숙박 예약 플랫폼',
    info: '',
    info2: `React ★★★★★
Express ★★★★★
MySQL ★★★☆☆
AWS ★★★★★`,
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '스몰 웨딩 중개 플랫폼 - 위플',
    info: '',
    info2: `React ★★★★★
Springboot ★★★★☆
MySQL ★★★☆☆
AWS ★★★★★`,
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '식자재 중개 플랫폼 - FreshM',
    info: '',
    info2: `React ★★★★★
Springboot ★★★★☆
MySQL ★★★☆☆
AWS ★★★★★`,
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ongdv94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ongdv94',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kyeong-woo-oh-02ba631a4/?originalSubdomain=kr',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ongdv',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
