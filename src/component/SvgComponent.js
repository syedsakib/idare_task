import React, { useState } from 'react';
import { parse } from 'papaparse';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSvgSuccess } from '../redux/svg/svgActions';

const SvgComponent = ({ props }) => {
  const [contacts, setContacts] = useState([]);
  const [maxX, setmaxX] = useState(0);
  const [minX, setminX] = useState(0);
  const [maxY, setmaxY] = useState(0);
  const [minY, setminY] = useState(0);
  const [maxZ, setmaxZ] = useState(0);
  const [minZ, setminZ] = useState(0);

  const dispatch = useDispatch();

  const findMax = (arr) => {
    let max1 = arr[0].X,
      min1 = arr[0].X;
    let max2 = arr[0].Y,
      min2 = arr[0].Y;
    let max3 = arr[0].Z,
      min3 = arr[0].Z;

    for (let i = 1, len = arr.length; i < len; i++) {
      let v1 = arr[i].X;
      let v2 = arr[i].Y;
      let v3 = arr[i].Z;
      max1 = v1 > Number(max1) ? v1 : Number(max1);
      min1 = v1 < Number(min1) ? v1 : Number(min1);
      max2 = v2 > Number(max2) ? v2 : Number(max2);
      min2 = v2 < Number(min2) ? v2 : Number(min2);
      max3 = v3 > Number(max3) ? v3 : Number(max3);
      min3 = v3 < Number(min3) ? v3 : Number(min3);
    }

    setmaxX(max1);
    setminX(min1);
    setmaxY(max2);
    setminY(min2);
    setmaxZ(max3);
    setminZ(min3);
    return;
  };

  // contacts && console.log(contacts);

  const handleChange = (e) => {
    Array.from(e.target.files)
      .filter((file) => file.type === 'text/csv')
      .forEach(async (file) => {
        const text = await file.text();
        const result = parse(text, { header: true });
        setContacts(result.data);
        findMax(result.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSvgSuccess({ maxX, minX, maxY, minY, maxZ, minZ }));
  };

  return (
    <div className='container'>
      <h1>SVG Import</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Max value of X</label>
          <input
            type='number'
            className='form-control'
            name='maxX'
            value={maxX}
            onChange={(e) => setmaxX(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Min value of X</label>
          <input
            type='number'
            className='form-control'
            name='minX'
            value={minX}
            onChange={(e) => setminX(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Max value of y</label>
          <input
            type='number'
            className='form-control'
            name='maxY'
            value={maxY}
            onChange={(e) => setmaxY(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Min value of Y</label>
          <input
            type='number'
            className='form-control'
            name='minY'
            value={minY}
            onChange={(e) => setminY(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Max value of Z</label>
          <input
            type='number'
            className='form-control'
            name='maxZ'
            value={maxZ}
            onChange={(e) => setmaxZ(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Min value of Z</label>
          <input
            type='number'
            className='form-control'
            name='minZ'
            value={minZ}
            onChange={(e) => setminZ(e.target.value)}
          />
        </div>

        <div className='pb-5'>
          <input type='file' id='file' onChange={handleChange} />
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
  );
};

export default SvgComponent;
