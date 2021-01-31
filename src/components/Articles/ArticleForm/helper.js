import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required('title is required'),
  content: yup.string().required('content is required'),
});
