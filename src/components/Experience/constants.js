export const jobs = [
  {
    start_date: 'January 2018',
    end_date: null,
    position: 'Senior Full-Stack Engineer',
    company: 'LifeWorks',
    location: 'Toronto, CA',
    description: `LifeWorks transfered me to their Toronto office to direct the
      development support in the Eastern Time Zone, continue the evolution and
      innovation of the product and create opportunities to build out a North
      America-based development team.`,
    tech_stack: null
  },
  {
    start_date: 'July 2016',
    end_date: 'December 2017',
    position: 'Lead Front-End Engineer',
    company: 'LifeWorks',
    location: 'London, UK',
    description: `In addition to front-end development,
      I performed hiring, training, and mentoring
      for the front-end team. I was also involved in project
      development and oversight and have helped to improve the
      operating platform.`,
    tech_stack: null
  },
  {
    start_date: 'July 2015',
    end_date: 'July 2016',
    position: 'Front-End Engineer',
    company: 'LifeWorks',
    location: 'London, UK',
    description: `LifeWorks: A Global Employee Engagement
      Platform serving 50,000 companies with over 15 million users.`,
    tech_stack: `JavaScript, React, AngularJS, HTML, CSS, Sass,
      Redux, Flow, Node.js, Webpack, Gulp, NPM, Clojure, ClojureScript,
      Jenkins, Vagrant`
  },
  {
    start_date: 'May 2012',
    end_date: 'July 2015',
    position: 'Senior Web Developer',
    company: 'Vanilla Active',
    location: 'London, UK',
    description: `Vanilla Active is a digital agency offering services to
      agencies and brands. We designed and implemented promotional web
      sites directly with brands and worked closely with advertising
      and marketing agencies.`,
    tech_stack: 'HTML, CSS, JavaScript, AngularJS, ColdFusion, PHP, Wordpress',
    print_margin: true
  },
  {
    start_date: 'November 2011',
    end_date: 'March 2012',
    position: 'Excel Expert',
    company: 'Wild Media Ltd',
    location: 'London, UK',
    description: `Wild Media Ltd is a startup in the new
      media area. As an Excel expert and
      database manager, I was in charge of optimising
      and automating the logistics department.`,
    tech_stack: null
  },
  {
    start_date: 'July 2011',
    end_date: 'November 2011',
    position: 'Consultant',
    company: 'De Valck Consultants by Altran',
    location: 'Brussels, Belgium',
    description: `De Valck Consultants is part of Altran group,
      the European leader in innovation consulting.
      It is the dedicated brand to Quality Assurance
      for the Life Science industry. I worked as an
      IS Validation Engineer at Baxter Healthcare.`,
    tech_stack: null
  },
  {
    start_date: 'December 2008',
    end_date: 'June 2011',
    position: 'Web Developer',
    company: 'Jules Bordet Institute',
    location: 'Brussels, Belgium',
    description: `The BrEAST data centre is a specialised clinical
      trials unit created in order to conduct large,
      international Phase III studies in breast cancer
      aiming to register new drugs. I worked as a web
      and application developer, in IT support and
      maintenance, and in validation of computer systems
      developed in-house (GCP, 21 CRF part 11).`,
    tech_stack: 'HTML, CSS, JavaScript, PHP, Java, Oracle SQL, MySQL'
  }
];

export type JobT = {
  start_date: string,
  end_date: ?string,
  position: string,
  company: string,
  location: string,
  description: ?string,
  tech_stack: ?string,
  print_margin?: boolean
};
