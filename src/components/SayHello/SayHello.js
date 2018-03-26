// @flow
import React from 'react';
import Contact from './Contact';
import { contacts } from './constants';
import type { ContactT } from './constants';
import './SayHello.css';

type Props = {
  showPrivateDetails: boolean
};

const SayHello = ({ showPrivateDetails }: Props) => {
  return (
    <div className="box say-hello">
      <h3>Say Hello</h3>
      {contacts
        .filter(
          (contact: ContactT) => (contact.isPrivate ? showPrivateDetails : true)
        )
        .map((contact: ContactT) => (
          <Contact {...contact} key={contact.type} />
        ))}
    </div>
  );
};

SayHello.displayName = 'SayHello';

export default SayHello;
