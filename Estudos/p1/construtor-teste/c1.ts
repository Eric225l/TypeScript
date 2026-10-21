class Teste{
    nome:string | null = null;
    sobrenome: string | null = null;
    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

let teste = new Teste("Eric", "Lourenço");

console.log(teste.nome);
console.log(teste.sobrenome);