const base = {a: 1}
const more = {b: 2, c: 3}
const extra = {d: 4}
const combinacion = Object.assign({e: 5}, base, more, extra)
console.log(combinacion);
console.log("prueba")

const sellado ={x: 1, y:2}
sellado.z = 3;
sellado.y = 4;

console.log(sellado)
Object.seal(sellado);

sellado.y = 6; //Se pueden cambiar propiedades
sellado.w = 5; //Pero no añadir ni eliminar

console.log(sellado)

const huerfano = {pobreza: "si"}

console.log("¿El huerfano tiene padre?", huerfano.hasOwnProperty("padre"))
console.log("¿El huerfano tiene madre?",huerfano.hasOwnProperty("madre"))
console.log("¿El huerfano tiene pobreza?",huerfano.hasOwnProperty("pobreza"))

//11
const animal = {
    sonido(){
        console.log("Hace un sonido")
    }
}

const gato = Object.create(animal);
gato.maullar = function(){
    console.log("miau")
}

gato.maullar()

//12
const numeros = Object.assign(base, more, extra);
console.log(numeros);

//13
const caja = {
    gato: "?",
    estado: "sin abrir",
}

Object.seal(caja);

caja.otroGato = "vivo";

console.log(caja);

//14
console.log("¿hereda 'sonido'?",gato.hasOwnProperty("sonido"));
console.log("¿hereda 'maullar'?",gato.hasOwnProperty("maullar"));

const anidado = [1,[5, [7]],9];
console.log("Flat(2)", anidado.flat());
console.log("Flat(2)", anidado.flat(2));

const resultado = anidado.flatMap(numero => numero.split(''))
