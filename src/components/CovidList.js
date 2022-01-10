import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCovidDataFromApi } from '../redux/action-reducer';

const CovidList = () => {
  const todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  console.log(data.covid.dates[todayDate].countries, 'Obj');
  const dataObj = data.covid.dates[todayDate].countries;
  const countriesArr = Object.entries(dataObj);
  console.log(countriesArr, 'Arr');
  const countries = countriesArr.map((country) => country[0]);

  useEffect(() => {
    dispatch(getCovidDataFromApi());
  }, []);
  return (
    <div>
      {countries.map((country) => (
        <p key={country}>{country}</p>
      ))}
    </div>
  );
};

export default CovidList;
