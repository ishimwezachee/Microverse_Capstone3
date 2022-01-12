import React from 'react';

const Data = (props) => {
  const prop = props;
  // console.log(prop);
  return (
    <div>
      <h1>{prop.data.name}</h1>
      <h3>
        today_deaths:
        {prop.data.today_deaths}
      </h3>
    </div>
  );
};

export default Data;
