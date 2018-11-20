import apiClient from './';

export const getTheRates = (date) => {
  return apiClient.get(`/rates/daily/?date=${date}`)
}