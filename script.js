const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        header.classList.add('header-scrolled');
    } else if (window.scrollY <= 100){
        header.classList.remove('header-scrolled');
    }
})

/**
 * Verifica que los datos ingresados sean los correctos.
 * @method verificarInput
 * @param {string} id - Id del elemento input del html;
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

verificarInput = (id, valor) => {

    let ganancia, tasa;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        ganancia = " ";
        tasa = " ";
    }
}


const openModal = document.querySelector('.btm');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal_show');
    header.style.display = 'none';
});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal_show');
    header.style.display = 'flex';
});

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Canvas BIEN

// Establecer el color de dibujo en verde
/*
context.strokeStyle = 'green';

// Dibujar el tic
context.font = '100px Arial';
const symbol = '✔️';
const textWidth = context.measureText(symbol).width;
const x = (canvas.width - textWidth) / 2; // Centrado horizontal
const y = canvas.height / 2; // Centrado vertical
context.fillText(symbol, x, 150);
*/
// Canvas MAL

context.strokeStyle = 'red';

// Dibujar el tic
context.font = '100px Arial';
const symbol = '❌';
const textWidth = context.measureText(symbol).width;
const x = (canvas.width - textWidth) / 2; // Centrado horizontal
const y = canvas.height / 2; // Centrado vertical
context.fillText(symbol, x, 150);


