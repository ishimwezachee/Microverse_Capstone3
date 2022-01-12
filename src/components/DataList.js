import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Data from './Data';

const DataList = () => {
  const { country } = useParams();
  const data = useSelector((state) => state.reducer);
  return (
    <div>
      {
            data.covid
              .filter((countryData) => countryData[0] === country)
              .map((countryInfo) => <Data key={country} data={countryInfo[1]} />)
        }
    </div>
  );
};

export default DataList;
