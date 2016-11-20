import React from 'react';
import awards from './awards.yaml';

export default () => (
  <div>
    <h2>Awards & Achievements</h2>
    <ul>
      {awards.map((award, i) => (
        <li key={i}>{award}</li>
      ))}
    </ul>
  </div>
);
