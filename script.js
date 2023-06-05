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


const openModal = document.getElementById('open');
const modalBien = document.querySelector('.modalBien');
const modalMal = document.querySelector('.modalMal');
const closeModal = document.querySelectorAll('.modal_close');
const ganancia = document.getElementById('ganancia');
const tasa = document.getElementById('tasa');

openModal.addEventListener('click', function (e) {
    e.preventDefault();
    const gananciaValor = parseFloat(ganancia.value);
    const tasaValor = parseFloat(tasa.value);

    if (gananciaValor === 10000 && tasaValor === 20) {
        modalBien.classList.add('modal_show');
        document.body.style.overflow = 'hidden';
        header.style.display = 'none';
    } else {
        modalMal.classList.add('modal_show');
        document.body.style.overflow = 'hidden';
        header.style.display = 'none';
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



