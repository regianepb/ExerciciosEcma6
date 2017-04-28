
function getCarro(fabricante, modelo, valor){
    return{
        fabricante,
        modelo,
        valor,

        ['fabricante' + fabricante]:true,

        depreciar(){
            this.valor = 2500;
        }
    };
}

let carro = getCarro('kia', 'Sorento', 40000);
console.log(carro);