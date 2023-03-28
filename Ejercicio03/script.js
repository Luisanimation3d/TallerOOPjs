const formulario = document.getElementById('Ejercicio3');
const result = document.getElementById('resultEjercicio03');
const openModal = document.getElementById('openModal');
const modalContainer = document.getElementById('modalContainer');

openModal.addEventListener('click', () => {
    modalContainer.classList.remove('modalContainer--hide');
    modalContainer.classList.add('modalContainer--show');
});

const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('modalContainer--show');
    modalContainer.classList.add('modalContainer--hide');
});

formulario.addEventListener('submit', function (e)  {
    e.preventDefault();

    try{
        if (formulario[0].value === '') {
            throw 'No se admiten campos vacios';
        }else if(formulario[0].value[0] === ',' || formulario[0].value[formulario[0].value.length - 1] === ','){
            throw 'No se admiten comas al principio o al final';
        }else if(formulario[0].value[0] === '.' || formulario[0].value[formulario[0].value.length - 1] === '.'){
            throw 'No se admiten puntos al principio o al final';
        }
        else if(/^(?!^[\.,])\d+([\.,](?![\.,])\d+)*$/gm.test(formulario[0].value) === false){
            throw 'Solo se admiten numeros, comas y puntos';
        }
        let tiempos = formulario[0].value.split(',');

        tiempos.forEach((tiempo, index)=>{
            tiempos[index] = parseFloat(tiempo);
        })


        const promedio = (tiempos.reduce((total, tiempo) => total + tiempo)) / tiempos.length;
        const maxMin = function (tiempos) {
            return [Math.min(...tiempos), Math.max(...tiempos)]
        }

        result.innerText = `El promedio de los tiempos es: ${Math.round(promedio)}`;
        result.innerHTML += '<br/>'
        result.innerText += `El tiempo maximo es ${maxMin(tiempos)[1]} y el minimo es ${maxMin(tiempos)[0]}`;
    }catch (error){
        result.innerText = error;
    }
});