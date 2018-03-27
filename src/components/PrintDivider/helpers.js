export const generateHTMLDots = (numberOfDots: number) => {
  let dots = '';
  for (let i = 0; i < numberOfDots; i++) {
    dots +=
      '<div><svg height="8" width="8"><circle cx="4" cy="4" r="2" class="dot"/></svg></div>';
  }

  return { __html: dots };
};
