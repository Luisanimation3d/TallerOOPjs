const formulario = document.getElementById('Ejercicio2');
const result = document.getElementById('resultEjercicio02');
const openModal = document.getElementById('openModal');
const modalContainer = document.getElementById('modalContainer');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    try{
        if (formulario[0].value === '') {
            throw 'No se admiten campos vacios';
        }else if(/[^0-9,]/.test(formulario[0].value)){
            throw 'Solo se admiten números y comas';
        }
        const valores = e.target[0].value.trim().split(',');

        const numerosPares = valores.map((valor) => {
            return valor % 2 === 0 ? ` ${valor} ` : '';
        }).join('');

        if(numerosPares === '') {
            result.innerText = 'No hay numeros pares';
        }else{
            result.innerText = `Los numeros pares son: ${numerosPares}`;
        }
    }catch (error){
        result.innerText = error;
    }

});


openModal.addEventListener('click', () => {
    modalContainer.classList.remove('modalContainer--hide');
    modalContainer.classList.add('modalContainer--show');
});

const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('modalContainer--show');
    modalContainer.classList.add('modalContainer--hide');
});



