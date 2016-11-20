import React from 'react';
import Marked from 'marked';
import moment from 'moment';
import styles from './job.module.css'

const formatDate = date => moment(date).format('MMM DD, YYYY');

export default ({
  company,
  position,
  content,
  subPosition,
  startDate,
  endDate,
}) => (
  <div>
    <h1>
      <span className={styles['position']}>
        {position}
      </span>
      {subPosition && (
        <span className={styles['sub-position']}>
          {subPosition}
        </span>
      )}
    </h1>
    <h2 className={styles['company']}>
      {company}
    </h2>
    <p>
      {formatDate(startDate)} - {formatDate(endDate)}
    </p>
    {content && (
      <div dangerouslySetInnerHTML={{ __html: Marked(content) }} />
    )}
  </div>
);
