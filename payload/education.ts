import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'JAVA 프로그래밍 교육',
      subTitle: '수료',
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
      title: '불곡고등학교',
      subTitle: 'Graduated',
      startedAt: '2008-03',
      endedAt: '2010-02',
    },
  ],
};

export default education;
