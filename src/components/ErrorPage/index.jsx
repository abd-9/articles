import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <h1>Sorry we have an issue!</h1>
      <Button color="primary" variant="contained" onClick={() => history.push('/signup')}>
        Go signup
      </Button>
    </>
  );
};

export default ErrorPage;
