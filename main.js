/*Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”*/

alert('JavaScript funcionando correctamente');

/*Esto es un comment*/

/*let VariableSinValor;*/

/*Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos*/

var booleano1 = true ;
var booleano2 = false;
console.log(booleano1)

/*Crear variable tipo const de nombre PI declarada con valor 3.14*/
const pi = 3.14
console.log(pi)

/*Crear variable tipo const de nombre TAU declarada con valor 2 veces PI*/
const TAU = (2*pi)
console.log(TAU)

/*Crear variable tipo const de nombre miNombre declarada con valor tu nombre*/
const miNombre = ('tuNombre')
console.log(miNombre)

/*Crear variable tipo const de nombre miNumeroFav declarada con valor numérico*/
const miNumFav = 10
console.log(miNumFav)

/*Crea una variable de tipo booleano*/
var booleano = true ;
console.log(booleano);

/*Muestra por consola la longitud de la variable miNombre*/
console.log(miNombre.length)

/*Muestra por consola el tipo de dato de la variable miNumeroFav*/
console.log(typeof miNumFav)

/*Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.*/

const nombre = "euralio"
const edad = 7
console.log( " hola, mi nombre es " + nombre + " y tengo " + edad + "años");


/*Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.*/

const frase = "sere un crack al acabar el bootcamp"
console.log(frase.toUpperCase())

/*Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”*/

const sacanumeros = " hola mundo "
console.log(sacanumeros.substring(0,8))

/*Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable*/

const miNumeroFav = miNumFav.toString()
console.log(typeof miNumeroFav)


/*Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.*/



let firstName = "Daniel";
let lastName = "Miguelez";

let text = `Hola ${firstName}, ${lastName}!`;
console.log(text)

/*Muestra por consola la variable PI hasta los 2 primeros decimales*/

console.log(pi.toFixed(2))



/*Vamonos con los arrays-----------------------------------------------------------------------------------------------*/


/*Crear variable de nombre arrayVacio cuyo valor sea un array vacío*/

const arrayVacio = [];


/*Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)*/

var arrayNumeros = [0,1,2,3,4,5,6,7,8,9]
console.log(arrayNumeros)

/*Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)*/

const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arrayNumeros2);

/*Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)*/

const arrayNumerosPares = [0,2,4,6,8]
console.log(arrayNumerosPares);

/*Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)*/

const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
console.log(arrayNumerosNeg);

/*Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'*/

const holaMundo = ["Hola" , "Mundo"]
console.log(holaMundo)

/*Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'*/

const loGuardoTodo = ["hola", "que", 23 , 42.33 , "tal" ]
console.log(loGuardoTodo)

/*Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]*/

const arrayDeArray = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(arrayDeArray)

/*Muestra por consola la longitud del array “loGuardoTodo”*/

console.log(loGuardoTodo.length);

/*Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola*/

loGuardoTodo.push("pedro")
console.log(loGuardoTodo)

loGuardoTodo.push("nicolas")
console.log(loGuardoTodo)

/*Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo*/
console.log(loGuardoTodo[1])
console.log(loGuardoTodo[3])

/*Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola*/

loGuardoTodo[3] = 'eulalio'
console.log(loGuardoTodo[3])


/*EJERCICIO 3*/


const coche = {
    marca: "seat",
    modelo:"opel",
    matricula: 123123
};
console.log(coche);

const casa = {
    CodPostal: 12006,
    calle:"la ensaimada",
    portal: 4,
    piso: 5,
}
console.log(casa)

/*Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)*/

const fullStackDeveloper = {
    languages: ["php", "python" , "js"], projects: ["uno", "dos", "tres"]
};
console.log(fullStackDeveloper)




/*Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores*/
    const perro = {
        nombre : "felipe",
        raza: "golden",
        color:"marron",
        edad:2,
    }
    console.log(perro)

/*Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores*/
    const noticia ={
        titular: ["titulo", "articulo"], cuerpo: ["periodista", "portada"]
    };

    console.log(noticia)

/*Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores*/

const persona = {
    nombre: ["david", "alex", "dani"], apellidos: ["pinilla", "miguelez", "Gonzalez"], edad: [
        13, 19, 22
    ]
};
console.log(persona)

/*Muestra por consola el nombre de la variable Persona*/

console.log(persona.nombre)

/*Muestra por consola el lenguaje javascript de la variable FullStackDeveloper*/

console.log(fullStackDeveloper.language[0])

/*Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola*/

const portatil = {
    marca: ["HP", "ACER", "PAVILION"]
};
console.log(portatil.marca)

/*Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola*/
console.log(portatil.marca)




/*Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola*/

const concierto = {
    grupos: ["ACDC", "OZZY", "METALLICA"]
};
console.log(concierto.grupos)

/*Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola*/

const led ={
    propiedades:{
        rgb:["rojo", "verde", "azul"]
    }};
    console.log(led.propiedades)

/*Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola*/
 const o_error ={
    codigo:"error"
 };
 console.log(o_error.codigo)

/*Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes*/


const grupo = {
    integrantes:["uno","dos","tres"]
};
console.log(grupo.integrantes[0])


/*Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola*/

const impresora = {
    tinta:{
        nivelesTinta:["rojo", "verde", "azul"],
    }};
    console.log(impresora.tinta);


/*Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola*/

    const movil = {
        especificaciones:{
            especificacions:["uno","tres","siete"],
        }
    };
    console.log(movil.especificaciones)



/*Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado*/

portatil.marca ="MSI"
console.log(portatil.marca)


/*Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado*/
    concierto.grupos.push("gunsandroses")
    console.log(concierto.grupos)



/*Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado*/

concierto.fecha ="1/1/2001"
console.log(concierto.fecha)
concierto.fecha = "nueva fecha26/09/2022"
console.log(concierto.fecha)

/*Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)*/


grupo.integrantes = 2;
console.log(grupo.integrantes)












