import React from 'react';

const Data = (props) => {
  const prop = props;
  return (
    <div className="dataWrapper">
      <div className="sub">
        <h1 className="country_title">
          {prop.data.name.toUpperCase()}
        </h1>
        <div className="section">
          <p>
            Date:
          </p>
          <p>
            {prop.data.date}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY CONFIRMED:
          </p>
          <p>
            {prop.data.today_confirmed}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY DEATHS:
          </p>
          <p>
            {prop.data.today_deaths}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY NEW CONFIRMED:
          </p>
          <p>
            {prop.data.today_new_confirmed}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY OPEN CASE:
          </p>
          <p>
            {prop.data.today_open_cases}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY RECOVERD:
          </p>
          <p>
            {prop.data.today_recovered}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY VS YESTRDAY CONFIRMED:
          </p>
          <p>
            {prop.data.today_vs_yesterday_confirmed}
          </p>
        </div>
        <div className="section">
          <p>
            TODAY VS YESTRDAY DEATHS:
          </p>
          <p>
            {prop.data.today_vs_yesterday_deaths}
          </p>
        </div>
        <div className="section">
          <p>
            YESTERDAY CONFIRMED:
          </p>
          <p>
            {prop.data.yesterday_confirmed}
          </p>
        </div>
        <div className="section">
          <p>
            YESTERDAY RECOVERD:
          </p>
          <p>
            {prop.data.yesterday_recovered}
          </p>
        </div>
        <div className="section">
          <p>
            SOURCE:
          </p>
          <p>
            {prop.data.source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
