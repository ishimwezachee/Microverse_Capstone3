import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DataList from './DataList';

const Item = (props) => {
  const { country } = useParams();
  const prop = props;
  return (
    <div>
      {
        country ? (<DataList />) : (
          <Link to={`/${prop.country}`}>
            {' '}
            <p>{prop.country}</p>
            <h3>{prop.data.today_deaths}</h3>
            {' '}
          </Link>
        )
      }
    </div>
  );
};

export default Item;
