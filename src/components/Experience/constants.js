export const jobs = [
  {
    start_date: 'April 2019',
    end_date: null,
    position: 'Venture Technology Lead',
    company: 'RBC Ventures',
    location: 'Toronto, CA',
    description: `RBC is going beyond banking to create meaningful solutions that touch every Canadian.`,
    achievements: [
      'Created a strategy to migrate database from MongoDB to Postgres.',
      'Improved team culture and overall happiness.'
    ],
    tech_stack: `JavaScript, React, React Native, Styled Components, Redux, Webpack, Node.js, Express, Sequelize, Postgres, Mongoose, MongoDB, AWS`
  },
  {
    start_date: 'July 2018',
    end_date: 'April 2019',
    position: 'Senior JavaScript Engineer',
    company: 'RBC Ventures',
    location: 'Toronto, CA',
    description: null,
    achievements: [
      'Led a complete refactor of the front-end code.',
      'Redesigned the database schema.',
      'Took the test coverage from 13% to 80%.'
    ],
    tech_stack: `JavaScript, React, SCSS, Redux, Webpack, Node.js, Express, Sequelize, Postgres, AWS`
  },
  {
    start_date: 'January 2018',
    end_date: 'July 2018',
    position: 'Senior Full-Stack Engineer',
    company: 'LifeWorks',
    location: 'Toronto, CA',
    description: `LifeWorks is a global employee engagement
      platform serving 50,000 companies with over 15 million users.`,
    achievements: [
      'Implemented an admin dashboard using clojure.',
      'Wrote lots of unit tests.'
    ],
    tech_stack: `JavaScript, React, AngularJS, HTML, CSS, Sass,
    Redux, Flow, Node.js, Webpack, Gulp, Clojure, ClojureScript,
    Jenkins, Vagrant`
  },
  {
    start_date: 'July 2016',
    end_date: 'December 2017',
    position: 'Lead Front-End Engineer',
    company: 'LifeWorks',
    location: 'London, UK',
    description: null,
    achievements: [
      'Hired, trained and mentored the front-end team.',
      'Improved the platform performances.'
    ],
    tech_stack: null
  },
  {
    start_date: 'July 2015',
    end_date: 'July 2016',
    position: 'Front-End Engineer',
    company: 'LifeWorks',
    location: 'London, UK',
    description: null,
    achievements: [
      'Built new features in React.',
      'Refactored features from AngularJS to React.'
    ],
    tech_stack: null
  },
  {
    start_date: 'May 2012',
    end_date: 'July 2015',
    position: 'Senior Web Developer',
    company: 'Vanilla Active',
    location: 'London, UK',
    description: `Vanilla Active is a digital agency offering services to
      agencies and brands.`,
    achievements: [
      'Built more than a 100 micro websites and (almost) none had bugs.'
    ],
    tech_stack: 'HTML, CSS, JavaScript, AngularJS, ColdFusion, PHP, Wordpress',
    print_margin: true
  },
  {
    start_date: 'December 2008',
    end_date: 'June 2011',
    position: 'Web Developer',
    company: 'Jules Bordet Institute',
    location: 'Brussels, BE',
    description: `The BrEAST data centre is a clinical trials unit 
      conducting international studies in breast cancer research.`,
    achievements: [
      'Maintained and developed new features for web portal used by doctors worldwide.',
      'Learned about validation of computer systems.'
    ],
    tech_stack: 'HTML, CSS, JavaScript, PHP, Java, Oracle SQL, MySQL'
  },
  {
    start_date: 'March 2019',
    end_date: null,
    position: 'Lead Instructor',
    company: 'Bridge School',
    location: 'Toronto, CA',
    description: `Free software development and product design education 
      for women, agender, and non-binary professionals in technology.`,
    tech_stack: null,
    volunteer: true
  }
];

export type JobT = {
  start_date: string,
  end_date: ?string,
  position: string,
  company: string,
  location: string,
  description: ?string,
  achievements: Array<string>,
  tech_stack: ?string,
  print_margin?: boolean,
  volunteer?: boolean
};
