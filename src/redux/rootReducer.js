import { combineReducers } from 'redux';

import companyReducer from './company/companyReducers';
import svgReducer from './svg/svgReducers';

export default combineReducers({
  company: companyReducer,
  svg: svgReducer,
});
