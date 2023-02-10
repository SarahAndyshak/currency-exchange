import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/ExchangeService';

// Business Logic

function getExchange(country, amount) {
  ExchangeService.getExchange(country, amount)
    .then(function(response) {
      if(response.conversion_result) {
        printElements(response);
      } else {
        printError();
      }
    });
}

// UI Logic

function printElements(response) {
  document.querySelector('#showExchangeRates').innerText = `The exchanged amount is ${response.conversion_result}.`;
}

function printError() {
  document.querySelector('#showExchangeRates').innerText = `There was an error: please enter a number above 0.`; // can't get response statusText to show up
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#number-input').value;
  const country = document.querySelector('#currency-type').value;
  document.querySelector('#number-input').value = null;
  getExchange(country, amount);
}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleFormSubmission);
});