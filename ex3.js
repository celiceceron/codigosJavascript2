/*
Crie uma função que recebe um texto e um número de repetiçōes.
Ela deve retornar uma string com o texto repetindo n vezes, 
sendo n o número de repetiçōes.
*/

const retornaTextoNVezes = (texto, n) => {

    let resultado = "";

    for (let i = 0; i <= n; i++){
        resultado += texto;
    }
        return resultado
}

console.log(retornaTextoNVezes("bla", 20));