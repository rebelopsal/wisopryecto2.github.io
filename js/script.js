//Boton nocturno
const botonSwitch = document.querySelector('#switch');

botonSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    botonSwitch.classList.toggle('active');
});

//Botones de menu

const btn = document.querySelector('.btn');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.btn span');

btn.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});


/* Carrusel*/


const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// Formulario



document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('miFormulario');
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var asuntoInput = document.getElementById('asunto');
    var enviarBtn = document.querySelector('input[type="submit"]');
  
    // Asociar eventos de entrada a los campos
    nombreInput.addEventListener('input', validarNombre);
    emailInput.addEventListener('input', validarEmail);
    asuntoInput.addEventListener('input', validarAsunto);
  
    // Validar el formulario cuando se envía
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();
  
      if (validarFormulario()) {
        // Realizar acciones adicionales si es necesario
        alert('Formulario válido. Enviando datos...');
      } else {
        // Mostrar mensajes de error si la validación falla
        alert('Por favor, corrija los errores en el formulario.');
      }
    });
  
    // Funciones de validación para cada campo
    function validarNombre() {
      var nombreValor = nombreInput.value.trim();
      if (nombreValor.length < 3) {
        mostrarError(nombreInput, 'El nombre debe tener al menos 3 caracteres.');
      } else {
        quitarError(nombreInput);
      }
  
      validarFormulario();
    }
  
    function validarEmail() {
      var emailValor = emailInput.value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValor)) {
        mostrarError(emailInput, 'Ingrese un email válido.');
      } else {
        quitarError(emailInput);
      }
  
      validarFormulario();
    }
  
    function validarAsunto() {
      var asuntoValor = asuntoInput.value.trim();
      if (asuntoValor.length === 0) {
        mostrarError(asuntoInput, 'Por favor, ingrese un asunto.');
      } else {
        quitarError(asuntoInput);
      }
  
      validarFormulario();
    }
  
    // Función general para validar el formulario
    function validarFormulario() {
      if (
        nombreInput.checkValidity() &&
        emailInput.checkValidity() &&
        asuntoInput.checkValidity()
      ) {
        enviarBtn.removeAttribute('disabled');
        return true;
      } else {
        enviarBtn.setAttribute('disabled', 'true');
        return false;
      }
    }
  
    // Funciones para mostrar y quitar mensajes de error
    function mostrarError(campo, mensaje) {
      // Puedes personalizar esto (por ejemplo, mostrando un mensaje en el DOM)
      alert(mensaje);
    }
  
    function quitarError(campo) {
      // Puedes personalizar esto para realizar acciones específicas al quitar el error
    }
  });







