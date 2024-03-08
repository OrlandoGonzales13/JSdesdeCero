//Capacidades que tienen las funciones al igual que otros

//1.Pasar funcioens como argumentos -> callback
function a() { }
function b(a) { }
b(a);

//Retornar funciones
function a() {
    function b() {
        return b;
    }
}

//Asignar funciones a variables -> Expresión de función

const a = function () { };

//Tener propiedades y métodos

function a() { }
const obj = {};
a.call(obj);

function imprimirInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Profesión: ${this.profesion}`);
}

// Objeto 1
const persona1 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
};

// Objeto 2
const persona2 = {
    nombre: "Ana",
    edad: 25,
    profesion: "Doctora",
};

// Utilizar la función imprimirInformacion con diferentes objetos
imprimirInformacion.call(persona1);
console.log("--------------------");
imprimirInformacion.call(persona2);

//```un ejemplo más práctico del uso del método `call` para cambiar el contexto de una función y utilizar propiedades del objeto proporcionado

//Anidar funciones -> Nested functions
function a() {
    function b() {
        function c() { }
        c();
    }
    b();
}
a();

//Es posible almacenar funciones en objetos?

const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage() {
        console.log("🔥");
    },
};

rocket.launchMessage();
