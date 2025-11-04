const base = {a: 1}
const more = {b: 2, c: 3}
const extra = {d: 4}
const combinacion = Object.assign({}, base, more, extra)
console.log(combinacion);