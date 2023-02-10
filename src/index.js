import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/ExchangeService';

// Business Logic

function getExchange(amount) {
  ExchangeService.getExchange(amount)
    .then(function(response) {
      if(response.main) {
        printElements(response, amount);
      } else {
        printError(response);
      }
    });
}

// UI Logic

function printElements(amount) {
  document.querySelector('#showExchangeRates').innerText = `The current exchange rate is {}`
}