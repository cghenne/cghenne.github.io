export const jobs = [
  {
    start_date: 'September 2019',
    end_date: null,
    position: 'Engineering Manager',
    company: 'ACV Auctions',
    location: 'Toronto, CA',
    description: `ACV Auctions provides a mobile app and web platform that allows car dealers to quickly buy and sell wholesale vehicles through live auctions.`,
    achievements: null
  },
  {
    start_date: 'April 2019',
    end_date: 'September 2019',
    position: 'Venture Technology Lead',
    company: 'RBC Ventures',
    location: 'Toronto, CA',
    description: `RBC is going beyond banking to create solutions that touch every Canadian.`,
    achievements: [
      'Migrated database from MongoDB to PostgreSQL.',
      'Improved team culture and overall happiness.'
    ]
  },
  {
    start_date: 'July 2018',
    end_date: 'April 2019',
    position: 'Senior JavaScript Engineer',
    company: 'RBC Ventures',
    location: 'Toronto, CA',
    description: null,
    achievements: [
      'Led a complete refactor of the front-end.',
      'Redesigned the database schema.',
      'Took the test coverage from 13% to 80%.'
    ]
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
      'Implemented a dashboard using clojure.',
      'Wrote lots of unit tests.'
    ],
    print_margin: true
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
    ]
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
    ]
  },
  {
    start_date: 'May 2012',
    end_date: 'July 2015',
    position: 'Senior Web Developer',
    company: 'Vanilla Active',
    location: 'London, UK',
    description: `Vanilla Active is a digital agency offering services to
      agencies and brands.`,
    achievements: ['Built more than a 100 micro websites.']
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
      'Worked on a website used by doctors worldwide.',
      'Learned about validation of computer systems.'
    ]
  },
  {
    start_date: 'March 2019',
    end_date: null,
    position: 'Lead Instructor',
    company: 'Bridge School',
    location: 'Toronto, CA',
    description: `Free software development education 
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
  print_margin?: boolean,
  volunteer?: boolean
};
