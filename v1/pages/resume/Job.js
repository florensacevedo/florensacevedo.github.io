import React from 'react';
import Marked from 'marked';
import moment from 'moment';
import styles from './job.module.css'

const formatDate = date => moment(date).format('MMM YYYY');

  export default ({
    company,
    position,
    content,
    subPosition,
    startDate,
    endDate,
    location,
  }) => (
    <div className="margin-left padding-top">
      <p className={`large ${styles['date']}`}>
        {formatDate(startDate)} - {formatDate(endDate)}
        <span className={styles['location']}>
          {location}
        </span>
      </p>
      <h3>
        <span className={styles['position']}>
          {position}
        </span>
        {subPosition && (
          <span className={styles['sub-position']}>
            {subPosition}
          </span>
        )}
      </h3>
      <h4 className={`margin-top-xs margin-bottom-30 ${styles['company']}`}>
        {company}
      </h4>
      {content && (
        <div dangerouslySetInnerHTML={{ __html: Marked(content) }} />
      )}
    </div> 
  );
        
