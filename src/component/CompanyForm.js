import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanySuccess } from '../redux/company/companyActions';

const CompanyForm = () => {
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [client, setClient] = useState('');
  const [contractor, setContractor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${productName} ${productDetails} ${client} ${contractor}`);
    dispatch(
      fetchCompanySuccess({ productName, productDetails, client, contractor })
    );
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Peoject Name</label>
            <input
              type='text'
              className='form-control'
              name='productName'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Peoject Description</label>
            <input
              type='text'
              className='form-control'
              name='productDetails'
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Client</label>
            <input
              type='text'
              className='form-control'
              name='client'
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Contractor</label>
            <input
              type='text'
              className='form-control'
              name='contractor'
              value={contractor}
              onChange={(e) => setContractor(e.target.value)}
            />
          </div>
          <button
            className='btn btn-lg btn-secondary'
            type='submit'

            //disabled={count === 2}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default CompanyForm;
