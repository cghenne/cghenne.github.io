export const skills = [
  {
    type: 'languages',
    label: 'Languages',
    list: ['JavaScript ES6/ES7', 'CSS3/Sass', 'HTML5']
  },
  {
    type: 'frameworks-libraries',
    label: 'Frameworks & Libraries',
    list: [
      'React',
      'Redux',
      'Jest',
      'Flow',
      'Node.js',
      'Express',
      'AngularJS 1.x'
    ]
  },
  {
    type: 'tools',
    label: 'Tools',
    list: ['Webpack', 'NPM', 'Gulp', 'Travis CI']
  },
  {
    type: 'databases',
    label: 'Databases',
    list: ['MongoDB', 'MySQL']
  },
  {
    type: 'other',
    label: 'Other',
    list: [
      'Git',
      'Jira',
      'Agile workflows',
      'Single Page Application',
      'Responsive Web Design',
      'Mobile First Design',
      'Cross-Browser Compatibility',
      'Accessiblity'
    ]
  }
];

export type SkillT = {
  type: string,
  label: string,
  list: Array<string>
};
