/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchArticleAction } from '../../redux/actions';

import ArticlesList from './ArticlesList';
import Article from './Article';
import { useStyles } from './style';

import { Container, Grid } from '@material-ui/core';

const Articles = ({ fetchArticle }) => {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchArticle(id);
  }, [id]);

  return (
    <Container className={classes.container}>
      <Grid container justify="space-around">
        <Grid item xs={3}>
          <ArticlesList />
        </Grid>
        <Grid item xs={8}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToPropa = (dispatch) => ({
  fetchArticle: (articleId) => dispatch(fetchArticleAction(articleId)),
});

Articles.propTypes = {
  user: PropTypes.shape({}),
};

Articles.defaultProps = {
  user: {},
};

export default connect(null, mapDispatchToPropa)(Articles);
