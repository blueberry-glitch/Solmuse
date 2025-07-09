// Manejo de pantallas
const screens = {
  start: document.getElementById('start-screen'),
  login: document.getElementById('login-screen'),
  register: document.getElementById('register-screen'),
  main: document.getElementById('main-app')
};

const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');
const loginBack = document.getElementById('login-back');
const registerBack = document.getElementById('register-back');

btnLogin.addEventListener('click', () => switchScreen('login'));
btnRegister.addEventListener('click', () => switchScreen('register'));
loginBack.addEventListener('click', () => switchScreen('start'));
registerBack.addEventListener('click', () => switchScreen('start'));

// Formularios
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const logoutBtn = document.getElementById('btn-logout');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  // Validación básica
  const email = loginForm['login-email'].value.trim();
  const pass = loginForm['login-password'].value.trim();
  if(email && pass){
    switchScreen('main');
  } else alert('Por favor completa todos los campos');
});

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  // Validación básica
  const name = registerForm['register-name'].value.trim();
  const email = registerForm['register-email'].value.trim();
  const pass = registerForm['register-password'].value.trim();
  if(name && email && pass){
    alert(`Cuenta creada para ${name}`);
    switchScreen('main');
  } else alert('Por favor completa todos los campos');
});

logoutBtn.addEventListener('click', () => {
  if(confirm('¿Seguro querés cerrar sesión?')){
    switchScreen('start');
    clearInputs();
    stopCamera();
    stopRecording();
  }
});

function switchScreen(screenName){
  for(let key in screens){
    if(key === screenName) screens[key].classList.add('active');
    else screens[key].classList.remove('active');
  }
}

function clearInputs(){
  [...document.querySelectorAll('input, textarea')].forEach(i => i.value = '');
  document.getElementById('results').textContent = '';
  hideElement(camera);
  hideElement(audioElem);
}

// Generar contenido simulado
const results = document.getElementById('results');
const userInput = document.getElementById('userInput');

document.getElementById('btn-art').addEventListener('click', () => {
  const text = userInput.value.trim();
  if(!text){
    alert('Por favor escribe cómo te sientes.');
    return;
  }
  results.textContent = '🎨 Creando arte inspirado en tu estado de ánimo...';
  setTimeout(() => {
    results.textContent = `🎨 Arte generado basado en: "${text}"\n(Implementa tu API aquí para imágenes reales)`;
  }, 1800);
});

document.getElementById('btn-music').addEventListener('click', () => {
  const text = userInput.value.trim();
  if(!text){
    alert('Por favor escribe cómo te sientes.');
    return;
  }
  results.textContent = '🎵 Componiendo música relajante basada en tu estado...';
  setTimeout(() => {
    results.textContent = `🎵 Música creada basada en: "${text}"\n(Implementa tu API aquí para música real)`;
  }, 1800);
});

document.getElementById('btn-poem').addEvent

