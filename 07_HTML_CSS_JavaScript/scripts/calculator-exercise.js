let calculation = localStorage.getItem('calculation');

if (calculation) {
  document.querySelector('.js-calculation').innerHTML = calculation;
} else {
  calculation = '';
}

function updateCalculation(element) {
  calculation += element;
  document.querySelector('.js-calculation').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}