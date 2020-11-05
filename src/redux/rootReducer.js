import { combineReducers } from 'redux';

import companyReducer from './company/companyReducers';

export default combineReducers({
  company: companyReducer,
});
