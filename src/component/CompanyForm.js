import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCompanySuccess } from '../redux/company/companyActions';

const CompanyForm = ({ count }) => {
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
    count();
  };

  return (
    <>
      <div className='container'>
        <h1 className='py-4 '>Company Information</h1>
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

          <div className='row justify-content-center'>
            {count !== 1 && (
              <button
                className='btn btn-lg btn-secondary'
                type='submit'
                //   onClick={count}

                //disabled={count === 2}
              >
                NEXT
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CompanyForm;
