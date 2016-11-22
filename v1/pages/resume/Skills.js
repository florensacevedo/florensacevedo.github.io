import React from 'react';
import styles from './skills.module.css';
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
  <div className={`margin-right ${styles['skills']}`}>
    <div>
      <h3 className="margin-top margin-bottom-30">Design Skills</h3>
      {list(design)}
    </div>
    <div>
      <h3 className="margin-top margin-bottom-30">Tools</h3>
      {list(tools)}
    </div>
    <div>
      <h3 className="margin-top margin-bottom-30">Soft Skills</h3>
      {list(soft)}
    </div>
  </div>
);
