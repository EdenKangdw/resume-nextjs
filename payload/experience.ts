import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '라이클컴퍼니',
      position: 'Backend Developer',
      startedAt: '2020-07',
      descriptions: [
        '앱 다운로드 10만 이상 아웃도어 장비 렌탈 플랫폼 "LYCLE" 서비스 운영',
        'Java / Spring Boot / GraphQL 기반 백엔드 개발',
        '개발팀 리드 역할 및 메인 백엔드 역할 수행',
        '사내 개발관련 내용 문서화 및 아티클 작성 주도',
        '레거시 청산 및 유지보수',
      ],
      skillKeywords: ['Java', 'Spring Boot', 'GraphQL', 'AWS', 'MySQL'],
    },
    {
      title: '오제이월드',
      position: 'Backend Developer',
      startedAt: '2018-06',
      endedAt : '2020-06',
      descriptions: [
        '채팅과 메신저 앱 스타트업',
        'Node 기반 백엔드 개발',
        '신규 프로젝트 기획과 PM 역할 수행함',
        '사내 개발관련 내용 문서화 주도',
        '기존 납품 프로젝트 유지보수 담당',
      ],
      skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'Vue', 'AWS'],
    },
    {
      title: '청호나이스',
      position: 'Inbound Sales',
      startedAt: '2014-01',
      endedAt: '2014-11',
      descriptions: [
        '업무 프로세스 개선 : 수기로 작성하던 장부를 Excel 베이스로 전산화 함',
        '모든 케이스를 다 겪어봄, 덕분에 어떤 상황에도 당황하지 않을 수 있음',
        '판매를 잘하여 인센티브를 많이 받음',
      ],
      skillKeywords: ['인바운드 영업', '평정심', '새로운것에두려움NO', '인센티브'],
    },
  ],
};

export default experience;
