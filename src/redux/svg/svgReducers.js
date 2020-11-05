import svgTypes from './svgTypes';

const INITIAL_STATE = {};

const svgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case svgTypes.FETCH_SVG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case svgTypes.FETCH_SVG_SUCCESS:
      return {
        loading: false,
        error: '',
        svgInfo: action.payload,
      };
    case svgTypes.FETCH_SVG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default svgReducer;
