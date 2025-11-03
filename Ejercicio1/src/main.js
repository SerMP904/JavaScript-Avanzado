//1
function descuento(precio){
    return precio - (precio/10)
}
console.log(descuento(50))

//2
const persona = {nombre: "Lucia", edad: 30}

const nuevaPersona = {...persona, nombre: "Lucia Perez"}

console.log(persona)
console.log(nuevaPersona)

//3
function operar (x, y, op) {
    return op(x,y);
}

function multiplicar(x, y){
    return x * y;
}

const catorce = operar(2, 7, multiplicar);
console.log(catorce)

//4
function doble (x){
    return x * 2;
}

function incrementar (x){
    return x + 1;
}

const compose = x => incrementar(doble(x)) 

console.log(compose(4))

//5 y 8
class Coche{
    constructor(marca, modelo){
        this.marca = marca,
        this.modelo = modelo
    }

    get info(){
        return this.marca + this.modelo;
    }

    arrancar(){
        return "Esta marca "+ this.marca +" ha arrancado"
    }

    static tipos(){
        return "Vehiculo Terrestre"
    }
}

const cochecito = new Coche("Dacia", "Sandero")
console.log(cochecito.arrancar());
//6
console.log(Coche.tipos());

//7
class CocheElectrico extends Coche{

    constructor(marca, modelo, bateria){
        super();
        this.bateria = bateria;
    }
    

    arrancar(){
        return "Ha arrancado con "+ this.bateria +"% de bateria. "
    }

}

const Tesla = new CocheElectrico("Tesla", "Super", 90)
console.log(Tesla.arrancar())
//cochecito.info()

//9

class CajaFuerte{
    
    #codigo = 4321
    
    codigo(){
        return this.#codigo;
    }

}

const seguridad = new CajaFuerte(3456);
console.log(seguridad.codigo());

//10

    
    const volador = {
        volar(){
            return "Estoy volando"
        }
    }

    const nadador = {
        nadar(){
            return "Estoy nadando"
        }
    }
    
function crearSuperMascota(mutacion){
    return {
    mutacion,
    ...volador,
    ...nadador
    };
}

const pegaso = crearSuperMascota("mutacion");
console.log(pegaso.volar());
console.log(pegaso.nadar());
console.log(pegaso.mutacion)
