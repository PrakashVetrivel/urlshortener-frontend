import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit = values => {
    console.log('Form data', values);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" className="form-control" />
            <ErrorMessage name="firstName" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" className="form-control" />
            <ErrorMessage name="lastName" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
