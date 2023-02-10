export default class ExchangeService {
  static getExchange(amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/latest/USD`)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage =
      }
    })
  }
}