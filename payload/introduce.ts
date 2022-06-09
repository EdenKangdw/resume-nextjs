import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '본래 무언가 고안하고 실제 만드는 것을 좋아하는 성향이 있어, 개발의 세상을 접한 후 모든 방면에 호기심을 가지고 도전하고 있습니다. 경험을 통해, 협업에서 문서화의 중요성을 매우 잘 알고 있기 때문에, 작업을 할 때 누구든지 이해할 수 있는 코드와 문서를 작성하기 위해 노력하고 있습니다.',
    '상용 서비스의 백엔드 개발자 역할을 수행하면서, 서비스의 확장과 변화를 고려한 설계의 중요성을 크게 느끼며 최근에는 인터페이스를 잘 설계하고 배치하는 것에 관심을 갖고 공부하고 있습니다. 모든 일을 대할 때, 효율성과 편의성을 극대화하는 방향으로 생각합니다. 현재 상황에서 가장 편하고 가장 효율적으로 작업할 수 있는 아키텍쳐와 플랫폼을 만들기 위해 계속 노력하고 있습니다.',
    '비전공자로서 개발자가 되었기 때문에 개발자와 비개발자 사이에서 커뮤니케이션을 원활히 할 수 있습니다. 그리고 영업으로 커리어를 시작하여 새로운 사람을 만나거나 본인의 의견을 발표하는데에 어려움이 없습니다.',
  ],
  sign: 'Eden Kang',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
