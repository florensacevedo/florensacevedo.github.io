import React from 'react';
import styles from './contact.module.css'
import {
  phone,
  email,
} from './contact.yaml';

export default () => (
  <div className={`large margin-top margin-right ${styles['contact']}`}>
    <p className={styles['phone']}>{phone}</p>
    <a href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);