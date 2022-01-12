import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DataList from './DataList';

const Item = (props) => {
  const { country } = useParams();
  const prop = props;
  console.log(prop);
  return (
    <div>
      {
        country ? (<DataList />) : (
          <Link to={`/${prop.country}`}>
            <div className="box">
              {' '}
              <h1>{prop.country}</h1>
              <h3>
                TODAY_CONFIRMED:
                {prop.data.today_confirmed}
              </h3>
              <h3>
                TODAY_RECOVERED:
                {prop.data.today_deaths}
              </h3>
              <h3>
                TODAY_DEATHS:
                {prop.data.today_deaths}
              </h3>
              {' '}
            </div>
          </Link>
        )
      }
    </div>
  );
};

export default Item;
