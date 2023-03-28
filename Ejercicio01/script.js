const formulario = document.getElementById('Ejercicio1');
const result = document.getElementById('result');

formulario.addEventListener('submit', function (e)  {
    e.preventDefault();
    try{
        if (formulario[0].value === '' || formulario[1].value === '') {
            throw 'No se admiten campos vacios';
        }else if(/[0-9]/.test(formulario[0].value) || /[0-9]/.test(formulario[1].value)){
            throw 'No se admiten números';
        }

        e.preventDefault();
        const word = e.target[0].value.toLowerCase();
        const character = e.target[1].value.toLowerCase();
        let counter = 0;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === character) {
                counter++;
            }
        }
        result.innerText = counter > 0 ? `La letra ${character} se repite ${counter} veces en la palabra ${word}` : `La letra ${character} no se repite en la palabra ${word}`

    }catch (error){
        result.innerText = error;
    }

});