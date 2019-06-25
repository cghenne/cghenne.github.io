// @flow
import React from 'react';
import './SayHello.scss';

type Props = {
  icon: string,
  link: string,
  url: string,
  type: string,
  isPrivate: boolean
};

const Contact = ({ icon, link, url, type, isPrivate }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact${isPrivate ? ' private' : ''}`}
    >
      <img src={icon} alt={type} />
      <span>{link}</span>
    </a>
  );
};

Contact.displayName = 'Contact';

export default Contact;
