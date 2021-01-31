/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteArticlAction } from '../../../redux/actions';

import { Button, CardContent, CardActions, Card, Typography } from '@material-ui/core';
import { useStyles } from './style';

const Article = ({ articleData, deleteArticl, user }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleDelete = () => {
    deleteArticl(articleData.id);
  };

  const hasPermission = () => {
    return articleData.userName === user.userName;
  };

  return articleData.id ? (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {articleData.creationDate}
        </Typography>
        <Typography variant="h5" component="h2">
          {articleData.title}
        </Typography>
        <img src={articleData.image || ''} className={classes.image} />
        <Typography
          variant="body2"
          component="div"
          dangerouslySetInnerHTML={{ __html: articleData.content || <></> }}
        ></Typography>
      </CardContent>
      {hasPermission() && (
        <CardActions>
          <Button
            size="small"
            onClick={() => history.push(`/articles/articleForm/${articleData.id}`)}
          >
            Edit
          </Button>
          <Button size="small" onClick={handleDelete}>
            delete
          </Button>
        </CardActions>
      )}
    </Card>
  ) : (
    ''
  );
};

const mapStateToProps = (state) => {
  const { article } = state.article;
  const user = state.auth;

  return {
    user,
    articleData: article,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  deleteArticl: (id) => dispatch(deleteArticlAction(id)),
});

Article.propTypes = {
  articleData: PropTypes.shape({}),
};

Article.defaultProps = {
  articleData: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(Article);
