
let getPrecoFinal = (preco, imposto = 0.7) => {
    return preco + preco * imposto;
}

console.log(getPrecoFinal(500)); //850

