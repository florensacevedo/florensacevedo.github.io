import React from 'react';
import styles from './education.module.css';
import {
  degree,
  school,
  projects,
} from './education.yaml';

export default () => (
  <div className={`margin-top margin-right ${styles['education']}`}>
    <h3>{degree}</h3>
    <h4 className={`margin-top-xs margin-bottom-30 ${styles['school']}`}>{school}</h4>
    <ul>
      {projects.map(({ name }, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  </div>
);
