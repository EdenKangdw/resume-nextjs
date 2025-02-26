import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '서울과학종합대학원대학교(ASSIST)',
      subTitle: 'AI빅데이터 학과 석사과정 재학중',
      startedAt: '2024-09',
      endedAt: '2025-08',
    },
    {
      title: '딥노이드 AI 머신러닝 교육 6주',
      subTitle: '수료',
      startedAt: '2021-11',
      endedAt: '2021-12',
    },
    {
      title: '독학사(컴퓨터과학)',
      subTitle: '학사',
      startedAt: '2021-01',
      endedAt: '2022-02',
    },
    {
      title: 'JAVA 프로그래밍 교육',
      subTitle: '국비지원 교육 수료',
      startedAt: '2017-09',
      endedAt: '2018-03',
    },
    {
      title: '한국방송통신대학교',
      subTitle: '법학과 휴학',
      startedAt: '2014-03',
      endedAt: '2014-06',
    },
    {
      title: '성령신학교',
      subTitle: '신학과 휴학',
      startedAt: '2010-03',
      endedAt: '2012-11',
    },
    {
      title: '불곡고등학교',
      subTitle: '졸업',
      startedAt: '2008-03',
      endedAt: '2010-02',
    },
  ],
};

export default education;
