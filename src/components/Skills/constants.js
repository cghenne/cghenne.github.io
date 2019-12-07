export const skills = [
  {
    type: 'languages',
    label: 'Languages',
    list: ['JavaScript ES6/ES7', 'CSS/SASS', 'HTML']
  },
  {
    type: 'frameworks-libraries',
    label: 'Frameworks / Libraries',
    list: [
      'React',
      'Redux',
      'React Native',
      'Node.js',
      'Express',
      'Sequelize',
      'Jest',
      'Flow'
    ]
  },
  {
    type: 'tools',
    label: 'Tools',
    list: ['Webpack', 'NPM/Yarn', 'Travis CI', 'CircleCI']
  },
  {
    type: 'databases',
    label: 'Databases',
    list: ['PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    type: 'other',
    label: 'Other',
    list: ['Git', 'Jira', 'Agile workflows', 'AWS']
  }
];

export type SkillT = {
  type: string,
  label: string,
  list: Array<string>
};
