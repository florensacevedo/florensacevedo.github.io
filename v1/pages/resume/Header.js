import React from 'react';
import styles from './header.module.css';
import { Row, Col } from 'react-bootstrap';
import Contact from './Contact';

export default () => (
  <div className="border-bottom">
    <Row>
      <Col xs={8}>
        <h1 className="margin-top margin-left">
          Florens Acevedo
        </h1>
      </Col>
      <Col xs={4}>
        <div className={`padding-left margin-right ${styles['contact']}`}>
          <Contact />
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={8}>
        <p className="large margin-top-45 padding-right margin-bottom margin-left">
          {'I\'m an advocate for the user, passionate about simple and effective interactions. I have a special place in my heart for: behavioural science, motivation psychology, and gamification.'}
        </p>
      </Col>
    </Row>
  </div>
);
