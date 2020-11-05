import companyTypes from './companyTypes';

const INITIAL_STATE = {};

const companyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case companyTypes.FETCH_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyTypes.FETCH_COMPANY_SUCCESS:
      return {
        loading: false,
        error: '',
        companyInfo: action.payload,
      };
    case companyTypes.FETCH_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
