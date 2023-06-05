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

const openModal = document.getElementById('open');
const modalBien = document.querySelector('.modalBien');
const modalMal = document.querySelector('.modalMal');
const closeModal = document.querySelectorAll('.modal_close');
const ganancia = document.getElementById('ganancia');
const tasa = document.getElementById('tasa');

openModal.addEventListener('click', function (e) {
    e.preventDefault();

    const gananciaValor = parseFloat(ganancia.value.replace(/[,.]/g, ''));
    const tasaValor = parseFloat(tasa.value);

    if (isNaN(gananciaValor) || isNaN(tasaValor) || ganancia.value !== gananciaValor.toString() || tasa.value !== tasaValor.toString()) {
        alert('El valor ingresado es incorrecto');
        ganancia.value = '';
        tasa.value = '';
    } else {
        if (gananciaValor === 10000 && tasaValor === 20) {
            modalBien.classList.add('modal_show');
            document.body.style.overflow = 'hidden';
            header.style.display = 'none';
            const canvas = document.getElementById('myCanvasBien');
            const context = canvas.getContext('2d');
            context.strokeStyle = 'green';
            context.lineWidth = 4;
            context.font = '100px Arial';
            const symbol = '✔️';
            const textWidth = context.measureText(symbol).width;
            const x = (canvas.width - textWidth) / 2; // Centrado horizontal
            context.fillText(symbol, x, 150);
        } else {
            modalMal.classList.add('modal_show');
            document.body.style.overflow = 'hidden';
            header.style.display = 'none';
            const canvas = document.getElementById('myCanvasMal');
            const context = canvas.getContext('2d');
            context.strokeStyle = 'red';
            context.lineWidth = 4;
            context.font = '100px Arial';
            const symbol = '❌';
            const textWidth = context.measureText(symbol).width;
            const x = (canvas.width - textWidth) / 2; // Centrado horizontal
            context.fillText(symbol, x, 150);
        }
    }
});

closeModal.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modalBien.classList.remove('modal_show');
        modalMal.classList.remove('modal_show');
        header.style.display = 'flex';
        document.body.style.overflow = 'auto';
    });
});
