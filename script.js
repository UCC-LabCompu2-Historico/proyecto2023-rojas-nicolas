const header = document.querySelector('.header');
const openModal = document.getElementById('open');
const modalBien = document.querySelector('.modalBien');
const modalDatos = document.querySelector('.modalDatos');
const modalMal = document.querySelector('.modalMal');
const closeModal = document.querySelectorAll('.modal_close');
const ganancia = document.getElementById('ganancia');
const tasa = document.getElementById('tasa');

/**
 * Realiza las acciones necesarias cuando se produce el evento 'scroll' en la ventana.
 * @method scrollEventHandler
 * @param {Event} event - El objeto del evento 'scroll'
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else if (window.scrollY <= 100) {
        header.classList.remove('header-scrolled');
    }
});

/**
 * Verifica que los datos ingresados sean los correctos y muestra la ventana modal correspondiente.
 * @method openModal (funcion anonima)
 * @param {Event} e - El objeto del evento 'click';
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */
openModal.addEventListener('click', function (e) {
    e.preventDefault();

    let gananciaValor = ganancia.value.replace(/[,$.]/g, '');
    let tasaValor = tasa.value.replace(/[,%]/g, '');

    if (gananciaValor === '' || tasaValor === '') {
        alert('Por favor, rellena ambos campos');
        return;
    }

    if (isNaN(gananciaValor) || isNaN(tasaValor)) {
        showModal(modalDatos, 'red', '❌', 'myCanvasDatos');
    } else {
        gananciaValor = parseFloat(gananciaValor);
        tasaValor = parseFloat(tasaValor);

        if (
            (gananciaValor === 10000 || ganancia.value === '$10,000') &&
            (tasaValor === 20 || tasa.value === '20%')
        ) {
            showModal(modalBien, 'green', '✔️', 'myCanvasBien');
        } else {
            showModal(modalMal, 'red', '❌', 'myCanvasMal');
        }
    }

    ganancia.value = '';
    tasa.value = '';
});

/**
 * Muestra la ventana modal correspondiente y realiza la animación en el canvas.
 * @method showModal
 * @param {Element} modal - El elemento del modal a mostrar.
 * @param {string} color - El color del símbolo en el canvas.
 * @param {string} symbol - El símbolo a mostrar en el canvas.
 * @param {string} canvasId - El ID del canvas.
 */
function showModal(modal, color, symbol, canvasId) {
    modal.classList.add('modal_show');
    document.body.style.overflow = 'hidden';
    header.style.display = 'none';
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.font = '100px Arial';
    const textWidth = context.measureText(symbol).width;
    const x = (canvas.width - textWidth) / 2; // Centrado horizontal
    context.fillText(symbol, x, 150);

    // Código para la animación en el canvas
    function animateCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillText(symbol, positionX, 150);
        positionX += 4; // Ajustar la velocidad de movimiento horizontal

        if (positionX > canvas.width) {
            positionX = -textWidth; // Reiniciar posición cuando el símbolo salga del canvas
        }

        requestAnimationFrame(animateCanvas);
    }

    let positionX = -textWidth;
    animateCanvas();
}

closeModal.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modalBien.classList.remove('modal_show');
        modalMal.classList.remove('modal_show');
        modalDatos.classList.remove('modal_show');
        header.style.display = 'flex';
        document.body.style.overflow = 'auto';
    });
});
