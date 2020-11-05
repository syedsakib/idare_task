import companyTypes from './companyTypes';

export const fetchCompanyRequest = () => {
  return {
    type: companyTypes.FETCH_COMPANY_REQUEST,
  };
};

export const fetchCompanySuccess = (companydata) => {
  return {
    type: companyTypes.FETCH_COMPANY_SUCCESS,
    payload: companydata,
  };
};

export const fetchCompanyFailure = (error) => {
  return {
    type: companyTypes.FETCH_COMPANY_FAILURE,
    payload: error,
  };
};

export const getCompanyData = (
  productName,
  productDetails,
  client,
  contractor
) => (dispatch) => {
  try {
    dispatch({ type: companyTypes.FETCH_COMPANY_REQUEST });
    dispatch({
      type: companyTypes.FETCH_COMPANY_SUCCESS,
      payload: productName,
      productDetails,
      client,
      contractor,
    });
  } catch (error) {
    dispatch({ type: companyTypes.FETCH_COMPANY_FAILURE, payload: error });
  }
};
