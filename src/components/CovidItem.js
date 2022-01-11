/* eslint-disable consistent-return */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Data from './Data';

const Item = (props) => {
const data = useSelector((state) => state.reducer);
  const { country } = useParams();
  const prop = props;
  return (
    <>
      <Link to={`/${prop.country}`}>{prop.country}</Link>
      <ul>
        {
            // country && <Data data={prop} />
        }
      </ul>
    </>
  );
};

export default Item;
