import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import '../css/stylesheet.css';

export default ({ children }) => (
  <Grid>
    {children}
  </Grid>
);
