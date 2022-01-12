import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DataList from './DataList';

const Item = (props) => {
  const { country } = useParams();
  const prop = props;

  return (
    <>
      <Link to={`/${prop.country}`}>{prop.country}</Link>
      <ul>
        {
            country && <DataList />
        }
      </ul>
    </>
  );
};

export default Item;
