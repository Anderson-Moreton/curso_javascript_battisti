class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;

    }

    abastecer(l) {

        this.gasolinaRestante += l;

    }

}

let carro = new Carro ("Volkswagen", "Preto", 100, 12);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(30);

console.log(carro);