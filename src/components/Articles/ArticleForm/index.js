/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  addArticlAction,
  fetchArticleAction,
  setUserAction,
  updateArticleAction,
} from '../../../redux/actions';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { convertBase64 } from '../../../config/helper';

import { Button, Container, Grid, TextField } from '@material-ui/core';
import { useStyles } from './style';
import { validationSchema } from './helper';

const ArticleForm = ({ article, fetchArticle, addArticle, updateArticle, setUser, user }) => {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const { handleSubmit, handleChange, values, setFieldValue, errors } = useFormik({
    enableReinitialize: true,
    initialValues: article,
    validationSchema: validationSchema,
    onSubmit: (_values) => {
      if (id === 'new') {
        addArticle({ ..._values, userName: user.userName });
        history.replace(`/articles/`);
      } else {
        updateArticle(_values);
        history.replace(`/articles/`);
      }
    },
  });
  const hasPermission = () => {
    return article?.userName === user?.userName;
  };

  useEffect(() => {
    if (!hasPermission() && !(id === 'new')) return history.push('/articles');
    fetchArticle(id === 'new' ? null : id);
  }, [id]);

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    if (file?.size > 3194304) {
      return toast.error('Larg image!');
    }
    const base64 = await convertBase64(file);

    setFieldValue('image', base64);
  };

  const removeImage = () => {
    setFieldValue('image', '');
  };

  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit}>
        <h2>{id === 'new' ? 'New Article' : 'Edit Article'}</h2>
        <Grid container spacing={1}>
          <Grid item xs={4} container>
            <TextField
              variant="outlined"
              placeholder="Article title"
              name="title"
              value={values.title}
              label="Title"
              fullWidth
              onChange={handleChange}
              error={errors.title}
            />
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <CKEditor
              editor={ClassicEditor}
              data={values.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setFieldValue('content', data, true);
              }}
              config={{
                removePlugins: ['ImageEmbed', 'ImageUpload'],
              }}
            />
            {errors.content}
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <input type="file" accept="image/*, " onChange={(e) => handleFileRead(e)}></input>
            {values.image ? <button onClick={removeImage}>Remove</button> : <></>}
            <Grid item xs={12} sm={12} lg={12}>
              <img src={values.image || ''} className={classes.image} />
            </Grid>
          </Grid>
          <Grid item xs={4} container>
            <Button color="primary" variant="contained" type="submit">
              {id === 'new' ? 'Create' : 'Update'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
const mapStateToProps = (state) => {
  const { article } = state.article;
  const user = state.auth;

  return {
    article,
    user,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  fetchArticle: (articleId) => dispatch(fetchArticleAction(articleId)),
  addArticle: (article) => dispatch(addArticlAction(article)),
  updateArticle: (article) => dispatch(updateArticleAction(article)),
  setUser: (user) => dispatch(setUserAction(user)),
});

ArticleForm.propTypes = {
  article: PropTypes.shape({}),
};

ArticleForm.defaultProps = {
  article: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(ArticleForm);
