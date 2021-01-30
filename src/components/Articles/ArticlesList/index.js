import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { changeField } from '../../../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background,
  },
}));

const ArticlesList = ({ articles }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        {/* <ListItemIcon>
          <StarIcon />
        </ListItemIcon> */}
        <ListItemText primary="Chelsea Otakan" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="Eric Hoffman" />
      </ListItem>
    </List>
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
});

ArticlesList.propTypes = {
  updateField: PropTypes.func.isRequired,
};

ArticlesList.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToPropa)(ArticlesList);
