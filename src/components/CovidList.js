import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCovidDataFromApi } from '../redux/action-reducer';
import CovidItem from './CovidItem';

const CovidList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getCovidDataFromApi());
  }, []);

  return (
    <div>
      {
        data.covid.map((country) => (
          <CovidItem key={country[0]} country={country[0]} />
        ))
      }
    </div>
  );
};

export default CovidList;
