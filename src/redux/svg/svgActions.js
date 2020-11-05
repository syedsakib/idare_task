import svgTypes from './svgTypes';

export const fetchSvgRequest = () => {
  return {
    type: svgTypes.FETCH_SVG_REQUEST,
  };
};

export const fetchSvgSuccess = (svgdata) => {
  return {
    type: svgTypes.FETCH_SVG_SUCCESS,
    payload: svgdata,
  };
};

export const fetchSvgFailure = (error) => {
  return {
    type: svgTypes.FETCH_SVG_FAILURE,
    payload: error,
  };
};

export const getSvgData = (maxX, minX, maxY, minY, maxZ, minZ) => (
  dispatch
) => {
  try {
    dispatch({ type: svgTypes.FETCH_SVG_REQUEST });
    dispatch({
      type: svgTypes.FETCH_SVG_SUCCESS,
      payload: maxX,
      minX,
      maxY,
      minY,
      maxZ,
      minZ,
    });
  } catch (error) {
    dispatch({ type: svgTypes.FETCH_SVG_FAILURE, payload: error });
  }
};
