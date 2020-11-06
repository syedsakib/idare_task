import React from 'react';
import { useSelector } from 'react-redux';

const TableComponent = () => {
  const company_info = useSelector((state) => state.company);
  const svg_info = useSelector((state) => state.svg);

  console.log(svg_info.svgInfo);
  const company = company_info.companyInfo;
  const svg = svg_info.svgInfo;

  return (
    <>
      <div className='container'>
        <h1>Project Details</h1>
        <table className='table '>
          <thead>
            <tr>
              <th scope='col'>ProductName Name</th>
              <th scope='col'>Project Description</th>
              <th scope='col'>Client</th>
              <th scope='col'>Contractor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>{company.productName}</th>
              <td>{company.productDetails}</td>
              <td>{company.client}</td>
              <td>{company.contractor}</td>
            </tr>
          </tbody>
        </table>

        <h1>File Statistics</h1>
        <table className='table '>
          <thead>
            <tr>
              <th scope='col'>max- (X)</th>
              <th scope='col'>min- (X)</th>
              <th scope='col'>max- (Y)</th>
              <th scope='col'>min- (Y)</th>
              <th scope='col'>max- (Z)</th>
              <th scope='col'>min- (Z)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>{svg.maxX}</th>
              <td>{svg.minX}</td>
              <td>{svg.maxY}</td>
              <td>{svg.minY}</td>
              <td>{svg.maxZ}</td>
              <td>{svg.minZ}</td>
            </tr>
          </tbody>
        </table>
        <button className='btn btn-dark' onClick={() => {}}>
          Download
        </button>
      </div>
    </>
  );
};

export default TableComponent;
