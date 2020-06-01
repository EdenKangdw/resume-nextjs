import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '강 동 원',
    small: '/ Eden Kang',
  },
  contact: [
    {
      title: 'edenkang5517@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '+82) 10-6641-5517',
      icon: faPhone,
      badge: false,
    },
    {
      title: 'https://github.com/edenkangdw',
      link: 'https://github.com/edenkangdw',
      icon: faGithub,
    },
  ],
  notice: {
    title: '연락은 이메일로 주시면 감사하겠습니다 : ) - Please contact me via email.',
    icon: faBell,
  },
};

export default profile;
