const formulario = document.getElementById('Ejercicio4');
const result = document.getElementById('resultadoEjercicio4');

function Militar(genero, edad, hijoUnico) {
    this.genero = genero;
    this.edad = edad;
    this.hijoUnico = hijoUnico === 'si';
    this.validar = function(){
        if (this.genero === 'male' && this.edad >= 18 && this.edad <= 25 && !this.hijoUnico) {
            return 'Puede ingresar al servicio militar';
        } else {
            return 'No puede ingresar al servicio militar';
        }
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    try{
        if (formulario.elements[0].value === '') throw new Error('El campo genero es obligatorio');
        if (formulario.elements[1].value === '') throw new Error('El campo edad es obligatorio');
        if (formulario.elements[2].value === '') throw new Error('El campo hijo unico es obligatorio');
        if (isNaN(formulario.elements[1].value)) throw new Error('El campo edad debe ser un numero');
        const genero = formulario.elements[0].value;
        const edad = formulario.elements[1].value;
        const hijoUnico = formulario.elements[2].value;
        const militar = new Militar(genero, edad, hijoUnico);
        result.innerHTML = militar.validar();
    }catch (e) {
        result.innerText = e.message;
    }
});