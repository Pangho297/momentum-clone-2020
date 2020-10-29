const form = document.querySelector('.js-form'),
  input = form.querySelector('.js-input'),
  greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classlist.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    // she is not
  } else {
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();