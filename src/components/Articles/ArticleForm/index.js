import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeArticleField, fetchArticleAction } from '../../../redux/actions';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useStyles } from './style';
import { useHistory, useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import { convertBase64 } from '../../../config/helper';

const ArticleForm = ({ changeField, article, fetchArticle }) => {
  const classes = useStyles();

  const validationSchema = yup.object({
    title: yup.string().required('title is required'),
    content: yup.string().required('content is required'),
  });

  const { handleSubmit, handleChange, values, setFieldValue, errors } = useFormik({
    initialValues: {
      ...article,
    },
    validationSchema: validationSchema,
    onSubmit: (_values) => {
      console.log('valuesssssss', _values);
      // send user data
    },
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id);
  }, [id]);

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    if (file.size > 3194304) {
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
            <input
              type="file"
              inputProps={{ accept: 'image/*' }}
              onChange={(e) => handleFileRead(e)}
            ></input>
            <img src={article.image || ''} className={classes.image} />
            <Button variant="outlined" color="default" onClick={removeImage}>
              Remove
            </Button>
          </Grid>
          <Grid item xs={4} container>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={() => toast.error('ssss')}
            >
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
  return {
    article,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  changeField: (fieldName, value) => dispatch(changeArticleField(fieldName, value)),
  fetchArticle: (articleId) => dispatch(fetchArticleAction(articleId)),
});

ArticleForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  article: PropTypes.shape({}),
};

ArticleForm.defaultProps = {
  article: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(ArticleForm);
