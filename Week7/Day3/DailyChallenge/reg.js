const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');
const registerError = document.getElementById('register-error');

registerForm.addEventListener('input', (event) => {
  registerBtn.disabled = !registerForm.checkValidity();
})

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  registerError.textContent = '';
  const url = 'http://localhost:8000/register';
  const formData = new FormData(registerForm);
  const first_name = formData.get('first_name');
  const last_name = formData.get('last_name');
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');
  const body = {first_name, last_name, email, username, password};
  try {
    registerBtn.disabled = true;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json();
    registerError.textContent = data.message;
  } catch (error) {
    console.error(error);
    registerError.textContent = error.message;
  } finally {
    registerBtn.disabled = !registerForm.checkValidity();
  }
})