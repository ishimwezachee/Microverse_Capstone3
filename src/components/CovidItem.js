import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import DataList from './DataList';

const Item = (props) => {
  const { country } = useParams();
  const prop = props;
  return (
    <div className="fetch_card">
      {
        country ? (<DataList />) : (
          <Link to={`/${prop.country}`}>
            <div className="icon">
              <FaArrowCircleRight />
            </div>
            <div className="box">

              {' '}
              <h1 className="country_name">{prop.country.toUpperCase()}</h1>
              <p className="item_name">
                {prop.data.today_confirmed}
              </p>
              {' '}
            </div>
          </Link>
        )
      }
    </div>
  );
};

export default Item;
