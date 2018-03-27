import { generateHTMLDots } from './helpers';

describe('generateHTMLDots', () => {
  it('should generate HTML that countains the number of svg circle passed into param', () => {
    const numberOfDots = 2;
    const html = generateHTMLDots(numberOfDots);
    expect(html.__html.split('circle').length).toEqual(numberOfDots + 1);
  });
});
