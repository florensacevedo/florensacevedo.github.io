import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contact from './Contact';

export default () => (
  <div>
    <Row>
      <Col sm={8}>
        <h1>
          Florens Acevedo
        </h1>
        <p>
          {'I\'m an advocate for the user, passionate about simple and effective interactions. I have a special place in my heart for: behavioural science, motivation psychology, and gamification.'}
        </p>
      </Col>
      <Col sm={4}>
        <Contact />
      </Col>
    </Row>
  </div>
);
