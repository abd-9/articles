import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().trim().required('title is required'),
  content: yup.string().trim().required('content is required'),
});
