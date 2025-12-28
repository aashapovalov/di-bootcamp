const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('input', (event) => {
  loginBtn.disabled = !loginForm.checkValidity();
})

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginError.textContent = '';
  const url = 'http://localhost:8000/login';
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const password = formData.get('password');
  const body = { username, password };
  try {
    loginBtn.disabled = true;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json();
    loginError.textContent = data.message;
  } catch (error) {
    console.error(error);
    loginError.textContent = error.message;
  } finally {
    loginBtn.disabled = !loginForm.checkValidity();
  }
})