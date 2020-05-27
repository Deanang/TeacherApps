import { Button, Typography } from '@material-ui/core';
import React from 'react';

export default function Clock() {
  var d = new Date();
  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        {d.toLocaleTimeString()}
      </Typography>
      <Button variant="outlined" color="secondary">
        This is a button!
      </Button>
    </>
  );
}
