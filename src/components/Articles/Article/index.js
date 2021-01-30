import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeField } from '../../../redux/actions';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Article = ({ articleData }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {articleData.createDate} Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          {articleData.title} sss
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          {articleData.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push('/articles/articleForm/sss')}>
          Edit{' '}
        </Button>
        <Button size="small">delete </Button>
      </CardActions>
    </Card>
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

Article.propTypes = {
  articleData: PropTypes.shape({}),
};

Article.defaultProps = {
  articleData: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(Article);
