const newsletterForm = document.getElementById('newsletterForm');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name.trim() === '' || email.trim() === '') {
    formMessage.textContent = 'Please fill in all fields';
    formMessage.style.color = '#ff0000';
  } else if (!validateEmail(email)) {
    formMessage.textContent = 'Please provide a valid email';
    formMessage.style.color = '#ff0000';
  } else {
    formMessage.textContent = 'Subscribed successfully!';
    formMessage.style.color = '#00cc00';
    newsletterForm.reset();
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const nameInput = document.getElementById('name');

nameInput.addEventListener('input', function () {
  const name = nameInput.value;
  const isValid = /^[a-zA-Z\s]*$/.test(name);

  if (!isValid) {
    nameInput.setCustomValidity('Name cannot contain numbers');
  } else {
    nameInput.setCustomValidity('');
  }
});
