/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticlesStartAction } from '../../../redux/actions';

import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background,
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
}));

const ArticlesList = ({ articlesList, fetchArticles }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log('articles', articlesList);
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {articlesList?.map((a, index) => (
        <ListItem
          divider={index < articlesList.length - 1}
          button
          key={a.id}
          onClick={() => history.push(`/articles/${a.id}`)}
        >
          <ListItemText primary={a.title} />
        </ListItem>
      ))}
    </List>
  );
};
const mapStateToProps = (state) => {
  const articlesList = state.article?.articlesList;
  return {
    articlesList,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticlesStartAction()),
});

ArticlesList.propTypes = {};

ArticlesList.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToPropa)(ArticlesList);
