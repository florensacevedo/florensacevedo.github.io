import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contact from './Contact';

export default () => (
  <div className="margin-left">
    <Row>
      <Col sm={8}>
        <h1 className="margin-top">
          Florens Acevedo
        </h1>
      </Col>
      <Col sm={4}>
        <Contact />
      </Col>
    </Row>
    <Row className="margin-bottom">
      <Col sm={8}>
        <p className="large margin-top-45">
          {'I\'m an advocate for the user, passionate about simple and effective interactions. I have a special place in my heart for: behavioural science, motivation psychology, and gamification.'}
        </p>
      </Col>
    </Row>
  </div>
);
