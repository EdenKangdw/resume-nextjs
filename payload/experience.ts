import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '로민',
      position: 'Model Serving / Backend Developer',
      startedAt: '2022-08',
      descriptions: [
        'Document AI 솔루션 Textscope의 백엔드 담당',
        'FastAPI, Postgresql을 사용하여 Model Serving 서버 구축 및 운영',
        '문서에 존재하는 수많은 형태의 날짜 문자열을 쉽게 원하는 형태로 가공하여 추출하도록 날짜 후보정 로직 개선',
        'Triton의 shared memory를 손쉽게 사용할 수 있도록 모듈화하여 솔루션 처리시간, 개발자 작업시간 단축에 기여',
        'pgpool을 사용하여 Postgresql DB의 HA구성 주도',
        'docker-compose 기반의 기존 솔루션을 helm chart를 사용하여 Azure K8S로 마이그레이션 수행',
        '솔루션의 다양한 서비스, 하드웨어를 모니터링하는 대시보드 시스템 개발',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Postgresql', 'docker', 'Triton', 'Azure', 'K8S', 'helm chart'] 
    },
    {
      title: '라이클컴퍼니',
      position: 'Lead Backend Developer',
      startedAt: '2020-07',
      endedAt : '2022-07',
      descriptions: [
        '앱 다운로드 10만 이상 아웃도어 장비 렌탈 플랫폼 "LYCLE" 서비스 운영',
        'Spring Boot와 GraphQL을 사용하여 API 서버 개발',
        '개발팀의 리드 역할을 하며 팀 빌딩 수행',
        '다양한 요금제를 하나의 모듈로 처리할 수 있도록 요금제 시스템 개편',
        '할부 결제 시스템 구축을 위해 PG 연동(이니렌탈) 수행',
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
        '신규 프로젝트 기획과 PM 역할 수행',
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
        '수기로 작성하던 발송 장부를 Excel 베이스로 전산화 하여 프로세스 개선',
        '전화 인바운드 영업을 수행하며 수많은 고객을 상대하는 경험을 통해 다양한 상황에 대한 대처 능력을 얻게됨',
        '고객에게 필요한 정보를 명확하고 간결하게 전달하는 것에 집중하였음. 그 결과 높은 판매량으로 인센티브를 많이 받음',
      ],
      skillKeywords: ['인바운드 영업', '커뮤니케이션', '상황 대처', '새로운것을 겁내지 않음', '인센티브'],
    },
  ],
};

export default experience;
