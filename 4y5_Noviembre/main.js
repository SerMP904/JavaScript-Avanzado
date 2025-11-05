const base = { a: 1 };
const more = { b: 2, c: 3 };
const extra = { d: 4 };
const combinacion = Object.assign({ e: 5 }, base, more, extra);
console.log(combinacion);
console.log("prueba");

const sellado = { x: 1, y: 2 };
sellado.z = 3;
sellado.y = 4;

console.log(sellado);
Object.seal(sellado);

sellado.y = 6; //Se pueden cambiar propiedades
sellado.w = 5; //Pero no añadir ni eliminar

console.log(sellado);

const huerfano = { pobreza: "si" };

console.log("¿El huerfano tiene padre?", huerfano.hasOwnProperty("padre"));
console.log("¿El huerfano tiene madre?", huerfano.hasOwnProperty("madre"));
console.log("¿El huerfano tiene pobreza?", huerfano.hasOwnProperty("pobreza"));

//11
const animal = {
  sonido() {
    console.log("Hace un sonido");
  },
};

const gato = Object.create(animal);
gato.maullar = function () {
  console.log("miau");
};

gato.maullar();

//12
const numeros = Object.assign(base, more, extra);
console.log(numeros);

//13
const caja = {
  gato: "?",
  estado: "sin abrir",
};

Object.seal(caja);

caja.otroGato = "vivo";

console.log(caja);

//14
console.log("¿hereda 'sonido'?", gato.hasOwnProperty("sonido"));
console.log("¿hereda 'maullar'?", gato.hasOwnProperty("maullar"));

//ejemplo flat
const anidado = [1, [5, [7]], 9];
console.log("Flat(2)", anidado.flat());
console.log("Flat(2)", anidado.flat(2));

const resultado = anidado.flatMap((numero) => numero * 3);
console.log(resultado);

//15, 16

const egyptianGod = new Set([1, 2, 2, 3, 4]);

egyptianGod.delete(3);
console.log(egyptianGod.has(4));
egyptianGod.add(5);

console.log(egyptianGod);

//17
const myths = new WeakSet();
const greeks = { god: "Zeus" };
const norse = { god: "Thor" };

myths.add(greeks);
myths.add(norse);
console.log(myths);
console.log(myths.has(greeks, norse));
//18
const fauna = new Map();

fauna.set("perro:", "mamifero");
fauna.set("abeja:", "insecto");
fauna.set("atún:", "pez");
fauna.set("gorrión:", "ave");
fauna.set("lagarto:", "reptil");

console.log(fauna.size);

//19
const DNI = new Map();
const clave1 = { id: 1 };
DNI.set(clave1, "Sergio");
const clave2 = { id: 2 };
DNI.set(clave2, "Victor");
console.log("Map completo: ", DNI);
console.log("Map clave2: ", DNI.get(clave2));
//20
const abc = new WeakMap();
const usuario = {};
abc.set({ usuario }, "abc123");

//21
const first2digits = [1, 2];
const second2digits = [3, 4];
const third2digits = [5, 6];

const contraseñaSegura = [...first2digits, ...second2digits, ...third2digits];
console.log(contraseñaSegura);

//22
const decimales = [10, 20, 30, 40];

const [primer, segundo, ...resto] = decimales;

console.log(resto);
console.log(decimales);

//23
const numeritos = [1, [2, [3, [4]]]];
console.log(numeritos.flat(3));

//24
const dobles = [2, 4, 6];
const normal = dobles.flatMap((n) => [n / 2, n]);
console.log(normal);

//25
for (let animal of fauna) {
  console.log(animal);
}
console.log(" ");
//alternativa bonita (no array)
for (const [k, y] of fauna) {
  console.log(k, y);
}

//26
/*
let contador = 0;
const time = setInterval(() => {
    contador++
    console.log(contador)
    if (contador >= 5){
        clearInterval(time)
    }
},1000)

//27
const parar = setTimeout(()=>{
    console.log("secreto")
},3000)

clearTimeout(parar);
*/
//28
/*
const div = document.querySelector("#app")
div.textContent="hola1"
div.addEventListener("click", removeListener()=> {
    console.log("hola")

})
function removeListener(){
    div.removeEventListener("click", ()=>{})
}*/

console.log("ejercicios errores");

//29
try {
  let texto = "ejemplo";
  let conversion = Number(texto);
  if (isNaN(conversion)) {
    throw new Error("esto es no es un número");
  }
} catch (e) {
  console.log(e.message);
}

//30
class ProductoError extends Error {
  constructor(msg) {
    super(msg);
  }
}

function validarPrecio(precio) {
  if (precio < 0) throw new ProductoError("precio incorrecto");
  console.log("precio correcto")
}

try {
  validarPrecio(-1);
} catch (e) {
  console.log(e.message);
}

//31
function abrirArchivo(nombre) {
  if (!nombre) throw new Error("no hay archivo");
  console.log("archivo")
}

try {
  abrirArchivo();
} catch (e) {
  console.log(e.message);
}

console.log("intervalo");

//32 y 33

try {
  throw new Error("algo ha salido mal");
} catch (ohno) {
  console.log(ohno.name + ": " + ohno.message);
} finally {
  console.log("Proceso finalizado");
}
