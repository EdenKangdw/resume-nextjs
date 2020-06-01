import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'Firebase',
      level: 2,
    },
    {
      title: 'Redis',
      level: 1,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'Typescript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'React.js',
      level: 2,
    },
  ],
};
const Mobile: ISkill.Skill = {
  category: 'Mobile',
  items: [
    {
      title: 'Android',
      level: 2,
    },
    {
      title: 'React-Native',
      level: 1,
    },
    {
      title: 'Swift',
      level: 1,
    },
  ],
};

const Language: ISkill.Skill = {
  category: 'Language',
  items: [
    {
      title: 'English',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Heroku',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Docker',
    },
    {
      title: 'PM2',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Firebase',
    },
    {
      title: 'Linux',
    },
    {
      title: 'MacOS',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, Mobile, Language, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
