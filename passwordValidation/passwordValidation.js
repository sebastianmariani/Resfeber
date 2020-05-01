const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkPassword = document.querySelector('#checkPassword');

form.addEventListener('submit' , (e) => {
   e.preventDefault(); 
   checkInputs(); 
});

function checkInputs() {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const checkPasswordValue = checkPassword.value.trim();
  
  if(userNameValue === '' ) {
    errorFor(username,'Username cannot be blank')
  } else {
    successFor(username)
  }
  
   if(emailValue === '' ) {
    errorFor(email,'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    errorFor(email,'Email is not valid');
  } else {
    successFor(email);
  }
  
  if(passwordValue === '' ) {
    errorFor(password,'Password cannot be blank');
  } else {
    successFor(password);
  }
  
  if(checkPasswordValue === '' ) {
    errorFor(checkPassword,'Confirm Password cannot be blank');
  } else if (checkPasswordValue !== passwordValue){
    errorFor(checkPassword, 'Confirm Password does not match the Password')
  } else {
    successFor(checkPassword);
  }
}

function errorFor(input , message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  small.innerText = message;
  
  formControl.className = 'form-control error';
}

function successFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}