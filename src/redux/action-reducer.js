// actions
const FETCH_DATA = 'FETCH_DATA';

// url
const todayDate = new Date().toISOString().slice(0, 10);
const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${todayDate}`;
// action creators
export const getFetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getCovidDataFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrldate);
  const response = await request.json();
  dispatch(getFetchData(response));
};
// intial state
const intialState = {
  covid: [],
};
// reducers
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, covid: action.payload };
    default:
      return state;
  }
};
// export it

export default reducer;
