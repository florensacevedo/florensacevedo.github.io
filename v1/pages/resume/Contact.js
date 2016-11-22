import React from 'react';
import styles from './contact.module.css'
import {
  phone,
  email,
} from './contact.yaml';

export default () => (
  <div className={`small margin-top ${styles['contact']}`}>
  	<a href={`mailto:${email}`}>
      {email}
    </a>
    <p className={styles['phone']}>{phone}</p>
  </div>
);