let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) => { return value + 10})
 .then((value) => {console.log(value)});