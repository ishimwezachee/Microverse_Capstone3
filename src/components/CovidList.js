import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCovidDataFromApi } from '../redux/action-reducer';
import CovidItem from './CovidItem';

const CovidList = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getCovidDataFromApi());
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={inputHandler} />
      <br />
      {
        value ? (
          data.covid
            .filter((countryData) => countryData[0]
              .toLowerCase()
              .includes(value.toLocaleLowerCase()))
            .map((country) => (
              <CovidItem key={country[0]} country={country[0]} data={country[1]} />
            ))
        )
          : (
            data.covid.map((country) => (
              <CovidItem key={country[0]} country={country[0]} data={country[1]} />
            ))
          )
      }
    </div>
  );
};

export default CovidList;
