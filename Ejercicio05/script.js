const formulario = document.getElementById("Ejercicio5");
const result = document.getElementById('resultadoEjercicio5');

function Jubilado(semanas, edad, genero, fondo){
    this.semanas = semanas;
    this.edad = edad;
    this.genero = genero;
    this.fondo = fondo;
    this.requisitos = ()=>{
        if(this.semanas >= 1300 && this.edad >= 62 && this.genero === 'hombre' && this.fondo === 'publico'){
            return 'Cumple con los requisitos para jubilarse';
        }else if(this.semanas >= 1300 && this.edad >= 57 && this.genero === 'mujer' && this.fondo === 'publico') {
            return 'Cumple con los requisitos para jubilarse';
        }else if(this.semanas >= 1150 && this.edad >= 62 && this.genero === 'hombre' && this.fondo === 'privado') {
            return 'Cumple con los requisitos para jubilarse';
        }else if(this.semanas >= 1150 && this.edad >= 57 && this.genero === 'mujer' && this.fondo === 'privado') {
            return 'Cumple con los requisitos para jubilarse';
        }else{
            return 'No cumple con los requisitos para jubilarse';
        }
    }
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    try{
        if(document.getElementById('semanas').value === '' || document.getElementById('age').value === ''){
            throw 'Por favor ingrese los datos solicitados';
        }
        if(document.getElementById('semanas').value < 0 || document.getElementById('age').value < 0){
            throw 'Por favor ingrese valores positivos';
        }
        if (isNaN(document.getElementById('semanas').value) || isNaN(document.getElementById('age').value)){
            throw 'Por favor ingrese valores numericos';
        }
        const semanas = parseInt(document.getElementById('semanas').value);
        const edad = parseInt(document.getElementById('age').value);
        const genero = document.getElementById('gender').value;
        const fondo = document.getElementById('tipoFondo').value;
        const jubilado = new Jubilado(semanas, edad, genero, fondo);
        result.innerHTML = jubilado.requisitos();
    }catch (e) {
        result.innerText = e;
    }
});