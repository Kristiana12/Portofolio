// contact form validation
const submitBtn = document.getElementById('submit-form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputSubject = document.getElementById('subject');
const inputMessage = document.getElementById('message');
const inputs = document.querySelectorAll(
  '.contact__form--inputs input:not([type="hidden"])'
);

//Email validation
const isEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

//check for empty inputs
const emptyInputs = () => {
  inputs.forEach((input) => {
    //   Inputs
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  //Textarea
  if (inputMessage.value === '') {
    inputMessage.classList.add('error');
  } else {
    inputMessage.classList.remove('error');
  }
};

const validateForm = (e) => {
  //   e.preventDefault();
  emptyInputs();
  // Check e-mail, make sure the aria atrributes are also being changed for the screen readers
  const userEmailValue = inputEmail.value;
  if (!isEmail(userEmailValue)) {
    inputEmail.classList.add('error');
    email.value = '';
    email.setAttribute('aria-invalid', 'spelling');
    inputMessage.classList.add('error');
  } else {
    email.setAttribute('aria-invalid', 'false');
    inputMessage.classList.remove('error');
  }
};

submitBtn.addEventListener('click', validateForm);
