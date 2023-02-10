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

// function printElements(actualAmount) {
//   document.querySelector('#showExchangeRates').innerText = `The converted amount is ${actualAmount}.`;
// }

function printElements(response) {
  document.querySelector('#showExchangeRates').innerText = `The exchanged amount is ${response.conversion_result}.`;
}

function printError() {
  document.querySelector('#showExchangeRates').innerText = `There was an error.`; // update this once CORS issue is solved???
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#number-input').value;
  const country = document.querySelector('#currency-type').value;
  document.querySelector('#number-input').value = null;
  getExchange(country, amount);

  // let actualAmount = (amount * getExchange(country));
  // return actualAmount; // not needed, found the url that includes the converted amount

}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleFormSubmission);
});