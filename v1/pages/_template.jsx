import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import '../css/markdown-styles';

export default ({ children }) => (
  <Grid>
    {children}
  </Grid>
);
