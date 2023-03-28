class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        console.log(this.edad);
        return this.edad;
    }

    restaYears(){
        return calcularYearsRestantes(this);
    }
}

class Perro extends Animal {
    constructor(gustos, hobbies, nombre, edad) {
        super(nombre, edad);
        this.gustos = gustos;
        this.hobbies = hobbies;
    }
    getGustos() {
        return this.gustos;
    }

    getLugares(){
        return lugaresRecomendados(this.gustos)
    }

}

class Gato extends Animal {
    constructor(comida, nombre, edad, marcaComida) {
        super(nombre, edad);
        this.comida = comida;
        this.marcaComida = marcaComida;
    }
}

const calcularYearsRestantes = (animal) => {
    if (animal instanceof Perro) {
        return animal.getEdad() - 10;
    } else if (animal instanceof Gato) {
        return 15 - animal.getEdad();
    }
}

const lugaresRecomendados = function (gustos) {
    let lugares = [];
    if (gustos.includes("Jugar con pelotas")) {
        lugares.push("Parque para perros", "Playa para perros");
    }else if (gustos.includes("Correr en la arena")) {
        lugares.push("Playa para perros");
    }else if (gustos.includes("Nadar en el agua")) {
        lugares.push("Playa para perros");
    }else if (gustos.includes("Explorar nuevos lugares")) {
        lugares.push("Senderos para perros");
    }else if (gustos.includes("Entrenar con otros perros")) {
        lugares.push("Centro de entrenamiento para perros");
    }else if (gustos.includes("Socializar con otros perros y personas")) {
        lugares.push("Café para perros");
    }else {
        lugares.push("No se encontraron lugares sugeridos para este perro.");
    }
    return lugares;
}

const formulario = document.getElementById('Ejercicio6');
const result = document.getElementById('resultEjercicio6');

const comidas = [
    "Royal Canin",
    "Hill's Science Diet",
    "Purina Pro Plan",
    "Iams",
    "Blue Buffalo",
    "Merrick",
    "Wellness",
    "Nature's Variety",
    "Taste of the Wild",
    "Nutro"
];

const seleccionarComida = function(){
    let comida1 = comidas[Math.floor(Math.random() * comidas.length)];
    let comida2 = comidas[Math.floor(Math.random() * comidas.length)];
    return [comida1, comida2];
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('age').value;
    const tipo = document.getElementById('tipo').value;
    const gustos = document.getElementById('gustos').value;
    const hobbies = document.getElementById('hobbies').value;
    const comida = document.getElementById('comida').value;

    try{
        if(tipo === 'perro' && (gustos === '' || hobbies === '')) {
            throw new Error('No puede dejar campos vacios');
        } else if (tipo === 'gato' && comida === '') {
            throw new Error('No puede dejar campos vacios');
        }
        if(nombre === '' || edad === '') {
            throw new Error('No puede dejar campos vacios');
        }

        if (tipo === 'perro') {
            const perro = new Perro(gustos, hobbies, nombre, edad);
            result.innerHTML = `El perro ${perro.getNombre()} tiene ${perro.getEdad()} años y le quedan ${perro.restaYears()} años de vida.`;
            result.innerHTML += ` Le gusta ${perro.getGustos()} y le recomendamos los siguientes lugares: ${perro.getLugares()}`;
        } else if (tipo === 'gato') {
            const gato = new Gato(comida, nombre, edad, seleccionarComida());
            result.innerText = `El gato ${gato.getNombre()} tiene ${gato.getEdad()} años y le quedan ${gato.restaYears()} años de vida.`;
            result.innerText += ` Le gusta comer ${gato.comida} y le recomendamos ${gato.marcaComida[0]} o ${gato.marcaComida[1]}`;
        }

    }catch (error) {
        result.innerText = error.message;
    }
})

