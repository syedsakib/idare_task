import React, { useState } from 'react';
import CompanyForm from './component/CompanyForm';
import SvgComponent from './component/SvgComponent';
import TableComponent from './component/TableComponent';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className='container '>
        <h1>Step: {count} </h1>
        {count === 1 ? (
          <>
            <CompanyForm count={() => setCount(count + 1)} />
          </>
        ) : null}
        {count === 2 ? (
          <div className='form-group'>
            <SvgComponent
              count1={() => setCount(count + 1)}
              count2={() => setCount(count - 1)}
            />
          </div>
        ) : null}

        {count === 3 ? (
          <>
            <TableComponent />
          </>
        ) : null}
      </div>
    </>
  );
};

export default App;
