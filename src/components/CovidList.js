import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCovidDataFromApi } from '../redux/action-reducer';

const CovidList = () => {
  const todayDate = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  const countryFunc = () => {
    // const arr = [];
    if (data.covid.dates) {
     return data.covid.dates[todayDate].countries;
    }
  
  };

  console.log(countryFunc());

  useEffect(() => {
    dispatch(getCovidDataFromApi());
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
         {}
      
    </div>
  );
};

export default CovidList;
