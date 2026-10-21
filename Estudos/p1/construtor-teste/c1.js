"use strict";
class Teste {
    nome = null;
    sobrenome = null;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
let teste = new Teste("Eric", "Lourenço");
console.log(teste.nome);
console.log(teste.sobrenome);
