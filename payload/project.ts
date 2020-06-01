import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Weegle 메신저 앱',
      startedAt: '2018-06',
      where: '오제이월드',
      descriptions: [
        { content: '메인 개발자와 함께 Node API 서버 개발' },
        {
          content: 'postman 사용하여 문서화 작업 수행',
        },
        {
          content: '해외 개발팀과 커뮤니케이션 담당',
          descriptions: [
            { content: '스카이프와 트렐로를 사용하여 협업 수행' },
            {
              content: '프로젝트 일정 관리와 버그 리포트 작성 담당',
            },
          ],
        },
      ],
    },
    {
      title: 'Covid-19 진단기기 시스템',
      startedAt: '2020-03',
      endedAt: '2020-05',
      where: '오제이월드',
      descriptions: [
        { content: '협력사의 코로나 진단기기를 연동한 백엔드 서버와 진료소용 웹 전체 개발' },
        {
          content: 'Node 백엔드 서버 개발 전담',
          weight: 'MEDIUM',
          descriptions: [
            { content: '진료소 방문 시, 환자 접수부터 온라인 음성증명서 발급까지 API 개발 전담' },
            { content: '진단 기기 서버 검사 데이터 연동 작업 수행' },
            { content: 'Token을 도입하여 Auth 처리' },
            { content: 'MariaDB 사용하여 DB 설계 및 세팅' },
            { content: 'Nginx, pm2 사용하여 배포 수행' },
          ],
        },
        {
          content: 'Vue.js 진료소 웹 개발 전담',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vue.js + Vuesax 활용 레이아웃 개발' },
            { content: '컴포넌트 활용하여 확장성과 재사용성 증진' },
            { content: 'Vuex와 Store 활용하여 공유 데이터 처리' },
          ],
        },
      ],
    },
    {
      title: 'IOT 정수기 연동 정부과제',
      startedAt: '2019-01',
      endedAt: '2019-12',
      where: '오제이월드',
      descriptions: [
        { content: '클라우드 플랫폼을 활용하여 IOT 정수기 백엔드 서버와 안드로이드 앱 개발' },
        {
          content: 'Node 백엔드 서버 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '정수기의 센서에서 보내는 데이터 처리 API 개발' },
            { content: 'Gitbook 사용하여 API 문서화 처리' },
            { content: 'MongoDB 활용' },
          ],
        },
        {
          content: '안드로이드 앱 개발 참여',
          weight: 'MEDIUM',
          descriptions: [
            { content: '정수기 기판의 와이파이 통신 모듈과 연동 작업 수행' },
            { content: '안드로이드와 C소켓 서버 통신 모듈 작성' },
          ],
        },
      ],
    },
    {
      title: '사사모 프로젝트',
      startedAt: '2019-09',
      endedAt: '2020-03',
      where: '개인 프로젝트',
      descriptions: [
        { content: '소속 교회의 사역 팀원 출석체크 및 관리용 시스템' },
        {
          content: 'Node 백엔드 서버 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '출석 관리, 팀 관리, 등급 관리, 통계 기능 API 작성' },
            { content: 'Token 활용하여 Auth 처리' },
            { content: 'Heroku 사용하여 배포함' },
            { content: 'MariaDB 활용' },
          ],
        },
        {
          content: '유저용 모바일 반응형 웹',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vue.js로 화면 작성함' },
            { content: '모바일 반응형 웹으로 처리함' },
            { content: '출석체크, 내 팀 확인 기능 작업' },
          ],
        },
        {
          content: '관리자용 대시보드 웹',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vue.js + Vuesax 로 화면 레이아웃 작성함' },
            { content: '출석 관리, 팀 관리, 등급 관리, 통계 기능 작업' },
          ],
        },
      ],
    },
  ],
};

export default project;
