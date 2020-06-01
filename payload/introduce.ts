import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '본래 무언가 고안하고 실제 만드는 것을 좋아하는 성향이 있어, 개발의 세상을 접한 후 모든 방면에 호기심을 가지고 공부하고 있습니다. 특히 Javascript의 무한한 가능성에 관심이 많아 JS기반의 프레임워크들을 공부하고 있습니다. 최근에는 Node와 Vue를 사용하여 주로 작업하고 있습니다. ',
    '경험을 통해, 협업에서 문서화의 중요성을 매우 잘 알고 있기 때문에, 작업을 할 때 누구든지 이해할 수 있는 코드와 문서를 작성하기 위해 노력하고 있습니다. 그리고 영업 기반의 커리어를 가지고 있어, 커뮤니케이션을 원활히 할 수 있습니다. 새로운 사람을 만나거나 본인의 의견을 발표하는데에 어려움이 없습니다.',
    '모든 일을 대할 때, 효율성과 편의성을 극대화하기 위해 노력합니다. 가장 편하고 가장 효율적으로 작업할 수 있는 아키텍쳐와 플랫폼을 만들기 위해 노력하고 있습니다.',
  ],
  sign: 'Eden Kang',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
