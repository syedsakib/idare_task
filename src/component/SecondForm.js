import React from 'react';
import CompanyForm from './CompanyForm';
import SvgComponent from './SvgComponent';

const SecondForm = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <CompanyForm />
        </div>
        <div className='col-md-6'>
          <SvgComponent />
        </div>
      </div>
    </div>
  );
};

export default SecondForm;
