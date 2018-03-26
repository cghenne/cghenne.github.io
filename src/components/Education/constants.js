export const education = [
  {
    graduation_year: 2014,
    school: 'The Mobile Academy',
    location: 'London, UK',
    description: `10 week course on the mobile industry organised
      by UCL (University College London) and Mobile Monday London.`
  },
  {
    graduation_year: 2008,
    school: 'Paul Lambin Institute',
    location: 'Brussels, Belgium',
    description: `BSc Computer Science (web services, infographic
      and artificial intelligence)`
  },
  {
    graduation_year: 2005,
    school: 'High School "Lycée de Berlaymont"',
    location: 'Waterloo, Belgium',
    description: `Sciences and mathematics`
  }
];

export type SchoolT = {
  graduation_year: number,
  school: string,
  location: string,
  description: string
};
