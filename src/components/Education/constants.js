export const education = [
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
