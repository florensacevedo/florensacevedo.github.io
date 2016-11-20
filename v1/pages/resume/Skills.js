import React from 'react';
import {
  design,
  tools,
  soft,
} from './skills.yaml';

const list = items => (
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
export default () => (
  <div>
    <div>
      <h2>Design Skills</h2>
      {list(design)}
    </div>
    <div>
      <h2>Tools</h2>
      {list(tools)}
    </div>
    <div>
      <h2>Soft Skills</h2>
      {list(soft)}
    </div>
  </div>
);
