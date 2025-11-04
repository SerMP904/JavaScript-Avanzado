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

//ejemplo flat
const anidado = [1,[5, [7]],9];
console.log("Flat(2)", anidado.flat());
console.log("Flat(2)", anidado.flat(2));

const resultado = anidado.flatMap(numero => numero*3)
console.log(resultado)

//15, 16

const egyptianGod = new Set([1,2,2,3,4])

egyptianGod.delete(3);
console.log(egyptianGod.has(4));
egyptianGod.add(5);

console.log(egyptianGod)

//17
const myths = new WeakSet()
const greeks = {god: "Zeus"}
const norse = {god: "Thor"}

myths.add(greeks)
myths.add(norse)

//18
const fauna = new Map()

fauna.set("perro:", "mamifero")
fauna.set("abeja:", "insecto")
fauna.set("atún:", "pez")
fauna.set("gorrión:", "ave")
fauna.set("lagarto:", "reptil")

console.log(fauna.size)

//19
const DNI = new Map();
const nombre = "Sergio"
DNI.set({id: 1}, nombre)

//20
const abc = new WeakMap();
const usuario = {}
abc.set({usuario}, "abc123")

//21
const first2digits = [1,2]
const second2digits = [3,4]
const third2digits = [5,6]

const contraseñaSegura = [...first2digits, ...second2digits, ...third2digits]
console.log(contraseñaSegura)

//22
const decimales = [10, 20, 30, 40]

const [primer, segundo, ...resto] = decimales

console.log(resto)
console.log(decimales)

//23
const numeritos = [1,[2, [3,[4]]]];
console.log(numeritos.flat(3));

//24
const dobles = [2,4,6];
const normal = dobles.flatMap(n => [n/2, n]);
console.log(normal)

//25
for (let animal of fauna){
    console.log(animal)
}
console.log(" ")
//alternativa bonita (no array)
for (const [k,y] of fauna){
    console.log(k,y)
}
