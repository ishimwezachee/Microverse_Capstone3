import React from 'react';

const Data = (props) => {
  const prop = props;
  return (
    <div className="dataWrapper">
      <h1>Today&#39;s Covid details in Country</h1>
      <div className="box sub">
        <h1 className="country_title">
          COUNTRY:
          {prop.data.name.toUpperCase()}
        </h1>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
        <p>
          today_deaths:
          {prop.data.today_deaths}
        </p>
      </div>
    </div>
  );
};

export default Data;
