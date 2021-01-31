import * as yup from 'yup';

export const validationSchema = yup.object({
  userName: yup.string().required('UserName is required'),
  firstName: yup.string().required('firstName is required'),
  lastName: yup.string().required('lastName is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
