import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
     <div data-test="item" style={{    textAlign: "center"}}>
      <h1 data-test="item">Page not found!</h1>
      <Button data-test="item" color="primary" variant="contained" onClick={() => history.push('/signup')}>
        Go signup
      </Button>
     </div>
  );
};

export default NotFound;
