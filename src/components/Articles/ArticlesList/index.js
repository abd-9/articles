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
      {articlesList?.map((a) => (
        <ListItem button key={a.id} onClick={() => history.push(`/articles/${a.id}`)}>
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

ArticlesList.propTypes = {
  updateField: PropTypes.func.isRequired,
};

ArticlesList.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToPropa)(ArticlesList);
