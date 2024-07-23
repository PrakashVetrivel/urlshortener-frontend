import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgotPassword = () => {
  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required')
  });

  const onSubmit = values => {
    console.log('Form data', values);
    // Add your password reset logic here
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Reset Password</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgotPassword;
