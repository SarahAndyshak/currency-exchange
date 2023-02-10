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

function printElements(response) {
  document.querySelector('#showExchangeRates').innerText = `The current exchange rate is ${response.main}.`;
}

function printError() {
  document.querySelector('#showExchangeRates').innerText = `There was an error ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#number-input').ariaValueMax;
  document.querySelector('#number-input').value = null;
  getExchange(amount);
}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleFormSubmission);
});