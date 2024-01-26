const buttonElement = document.querySelector('.js-button');

console.log(buttonElement.classList.contains('js-button'));

function toggleButton(buttonClass) {
  const buttonElement = document.querySelector(buttonClass);

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
    buttonElement.classList.add('is-toggled');
  }

  if (buttonClass === '.js-gaming-button' && buttonElement.classList.contains('is-toggled')) {
    document.querySelector('.js-music-button').classList.remove('is-toggled');
    document.querySelector('.js-tech-button').classList.remove('is-toggled');
  } else if (buttonClass === '.js-music-button' && buttonElement.classList.contains('is-toggled')) {
    document.querySelector('.js-gaming-button').classList.remove('is-toggled');
    document.querySelector('.js-tech-button').classList.remove('is-toggled');
  } else if (buttonClass === '.js-tech-button' && buttonElement.classList.contains('is-toggled')) {
    document.querySelector('.js-gaming-button').classList.remove('is-toggled');
    document.querySelector('.js-music-button').classList.remove('is-toggled');
  }
}

function calculateFullPrice() {
  const inputElement = document.querySelector('.cost-input');
  let cost = Number(inputElement.value);

  if (!cost) {
    document.querySelector('.cost-message').innerHTML = 'Error: cost must be a number.';
    document.querySelector('.cost-message').classList.add('cost-error');
  } else if (cost < 0) {
    document.querySelector('.cost-message').innerHTML = 'Error: cost cannot be less then $0.';
    document.querySelector('.cost-message').classList.add('cost-error');
  } else if (cost < 45) {
    cost += cost*100 / 1000;
    document.querySelector('.cost-message').innerHTML = `Full price: $${cost}`;
    document.querySelector('.cost-message').classList.remove('cost-error');
  } else {
    document.querySelector('.cost-message').innerHTML = `Full price: $${cost}`;
    document.querySelector('.cost-message').classList.remove('cost-error');
  }
}