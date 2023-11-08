//Boton nocturno
const botonSwitch = document.querySelector('#switch');

botonSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    botonSwitch.classList.toggle('active');
});

// Formulario


document.addEventListener('DOMContentLoaded', function(){

    const nombre = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputAsunto = document.getElementById('asunto');
    const inputTarea = document.getElementById('tarea');
    const form = document.getElementById('form');

    nombre.addEventListener('blur', validar);

    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputTarea.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta();
        }else{
            console.log('si hay algo..')
        }
    }
    function mostrarAlerta(){
        const error = document.createElement('p');
        error.textContent = 'Hubo un error';
        error.classList.add('bg-red-600', 'text-white', 'p-2');
        form.appendChild(error);
        console.log(error)
    }
})