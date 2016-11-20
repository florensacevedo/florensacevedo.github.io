import React from 'react';
import {
  phone,
  email,
} from './contact.yaml';

export default () => (
  <div>
    <p>{phone}</p>
    <a href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);
