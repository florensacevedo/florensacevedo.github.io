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

export default () => (
  <div>
    <Helmet
      title={`${config.siteTitle} - Resume`}
    />
    <Header />
    <Row>
      <Col sm={8}>
        {jobs.map((job, i) => (
          <Job key={i} {...job} />
        ))}
      </Col>
      <Col sm={4}>
        <Education />
        <Skills />
        <Awards />
      </Col>
    </Row>
  </div>
);
