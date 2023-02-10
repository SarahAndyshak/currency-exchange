/* eslint-disable no-unused-vars */
export default class ExchangeService {
  static getExchange(country, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/pair/USD/{country}/{amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `There was an error`; //update this to be specific
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(errorMessage) {
        return errorMessage;
      });
  }
}