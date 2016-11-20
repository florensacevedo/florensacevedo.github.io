import React from 'react';
import {
  degree,
  school,
  projects,
} from './education.yaml';

export default () => (
  <div>
    <h2>{degree}</h2>
    <h3>{school}</h3>
    <ul>
      {projects.map(({ name }, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  </div>
);
