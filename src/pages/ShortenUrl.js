import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ShortenUrl = () => {
  const initialValues = {
    longUrl: ''
  };

  const validationSchema = Yup.object({
    longUrl: Yup.string().url('Invalid URL format').required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    // Add your URL shortening logic here, for example, make an API call
    fetch('https://your-backend-api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Shortened URL:', data);
        // handle the response data, e.g., show a success message
        resetForm();
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h2>Shorten URL</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="longUrl">Long URL</label>
            <Field type="url" id="longUrl" name="longUrl" className="form-control" />
            <ErrorMessage name="longUrl" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Shorten</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ShortenUrl;
