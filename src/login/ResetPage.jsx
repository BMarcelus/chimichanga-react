import React from 'react';
import LoginPage from './LoginPage';
import ResetForm from './ResetForm';


const ResetPage = (props) => {
  return (
    <LoginPage
      content={<ResetForm />}
    />
  )
}

export default ResetPage;
