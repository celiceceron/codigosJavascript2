/*
Crie uma função que recebe uma array de números positivos diferentes
entre si e retorna o indice do maior número encontrado.
Ex: se a array for [10, 20, 5], a função deve retornar 1.
*/

const numeroMaior = (lista) => {
    let maior = 0;

    for (let i = 0; i < lista.length; i++){
        if(lista[i] > lista[maior]){
            maior = i;
        }
    }
    return maior
}

const lista = [10, 5, 15];
console.log(numeroMaior(lista))