import jsonpP from 'jsonp-p';

export const getTheRates = (date) => {
  return jsonpP(`http://hnbex.eu/api/v1/rates/daily/?date=${date}`).promise;
}