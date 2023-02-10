import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/ExchangeService';

// Business Logic

function getExchange(country) {
  ExchangeService.getExchange(country)
    .then(function(response) {
      if(response.conversion_rate) {
        printElements(response);
      } else {
        printError();
      }
    });
}

// UI Logic

function printElements(actualAmount) {
  document.querySelector('#showExchangeRates').innerText = `The converted amount is ${actualAmount}.`;
}

// function printElements(response) {
//   // document.querySelector('#showExchangeRates').innerText = `The current exchange rate is ${response.conversion_rate}.`;
// }

function printError() {
  document.querySelector('#showExchangeRates').innerText = `There was an error.`; // update this
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#number-input').value;
  const country = document.querySelector('#currency-type').value;
  document.querySelector('#number-input').value = null;
  getExchange(country);

  let actualAmount = (amount * getExchange(country));
  return actualAmount;

}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleFormSubmission);
});