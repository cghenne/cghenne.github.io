// @flow
import React from 'react';
import './SayHello.css';

type Props = {
  icon: string,
  link: string,
  url: string,
  type: string
};

const Contact = ({ icon, link, url, type }: Props) => {
  return (
    <a href={url} target="_blank" className="contact">
      <img src={icon} alt={type} />
      <span>{link}</span>
    </a>
  );
};

Contact.displayName = 'Contact';

export default Contact;
