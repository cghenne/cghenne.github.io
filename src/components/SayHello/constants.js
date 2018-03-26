import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import email from './assets/email.svg';
import phone from './assets/phone.svg';

export const contacts = [
  {
    type: 'github',
    icon: github,
    link: '/cghenne',
    url: 'https://github.com/cghenne',
    isPrivate: false
  },
  {
    type: 'linkedin',
    icon: linkedin,
    link: '/cathleen-ghenne',
    url: 'https://www.linkedin.com/in/cathleen-ghenne/',
    isPrivate: false
  },
  {
    type: 'email',
    icon: email,
    link: 'cathleen.ghenne@gmail.com',
    url: 'mailto:cathleen.ghenne@gmail.com',
    isPrivate: true
  },
  {
    type: 'phone',
    icon: phone,
    link: '+1 437 928 2032',
    url: 'tel:+14379282032',
    isPrivate: true
  }
];

export type ContactT = {
  icon: string,
  link: string,
  url: string,
  show: boolean
};
