import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Row, Col } from 'react-bootstrap';
import jobs from './jobs.yaml';
import Header from './Header';
import Job from './Job';
import Education from './Education';
import Skills from './Skills';
import Awards from './Awards';
import Interests from './Interests';
import styles from './index.module.css';

export default () => (
  <div>
    <Helmet
      title={`${config.siteTitle} - Resume`}
    />
    <Header />
    <Row>
      <Col xs={8}>
        <div className={`border-right padding-right padding-bottom ${styles['border']}`}>
          {jobs.map((job, i) => (
            <Job key={i} {...job} />
          ))}
        </div>  
      </Col> 
      <Col xs={4}>
        <div className={`padding-left padding-bottom ${styles['no-padding']}`}>
          <Education />
          <Skills />
          {/*<Awards />*/}
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Interests />
      </Col>
    </Row>
  </div>
);
