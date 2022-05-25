import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    login: Yup.string().required('Login is required'),
    password: Yup.string().required('Password is required'),
  });