import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TableComponent = () => {
  const company = useSelector((state) => state && state.company.companyinfo);
  const { productName, productDetails, client, contractor } = company;
  const svg = useSelector((state) => state && state.svg.svgInfo);
  const { maxX, minX, maxY, minY, maxZ, minZ } = svg;
  return (
    <div className='container p-4'>
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
            <th scope='row'>{productName}</th>
            <td>{productDetails}</td>
            <td>{client}</td>
            <td>{contractor}</td>
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
            <th scope='row'>{maxX}</th>
            <td>{minX}</td>
            <td>{maxY}</td>
            <td>{minY}</td>
            <td>{maxZ}</td>
            <td>{minZ}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
