import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeField } from '../../redux/actions';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import Article from './Article';

const Articles = ({ user }) => {
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user', user);
    // send user data
  };

  return (
    <Container className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ArticlesList />
        </Grid>
        <Grid item xs={8}>
          <Article articleData={{}} />
        </Grid>
      </Grid>
    </Container>
  );
};
const mapStateToProps = (state) => {
  const user = state.auth;
  return {
    user,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  updateField: (fieldName, value) => dispatch(changeField(fieldName, value)),
  actionSignup: (fieldName, value) => dispatch(changeField(fieldName, value)),
});

Articles.propTypes = {
  updateField: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

Articles.defaultProps = {
  user: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(Articles);