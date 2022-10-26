/*
Crie uma função que recebe 3 números como parâmetros. Os dois
primmeiros delimitam um intervalo. A função deve retornar um
array contendo os menoress números pares dentro do intervalo.
A quantidade de elementos nesse array deve ser igual ao terceiro
parâmetro passado.

Ex: Se for passado os valores "2", "10" e "3", a função deve
retornar o array [4,6,8].
Dica: array vazio e push.
*/

const intervaloDePares = (inicio, fim, quantidade) => {
    let pares = [];
    let numero = inicio;

    while (pares.length < quantidade) {
        numero += 1;
        if(numero % 2 == 0){
            pares.push(numero)
        }
    }
    return pares
}

console.log(intervaloDePares(2, 10, 3));