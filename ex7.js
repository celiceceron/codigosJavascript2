/*
Crie uma função que retorna qual o dia da semana vai ser
a partir de um dia passado como string e de uma quantidade de dias
a ser avançado. Para isso, a função deve receber uma string
e um número como parâmetros e retornar uma string.

Ex: se for passado "Segunda-feira" e 8, a função deve 
retornar "Terça-feira", pois, avançar 8 dias a partir de segunda-
feira cai na terça-feira da semana seguinte.
*/

const retornaDiaDaSemana = (dia, n) => {
    let dias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
    let indice = 0;

    for(let i = 0; i < dias.length; i++){
        if(dia[i] === dias){
            indice = i;
        }
    indice = (indice + n) % 7;
        return dias [indice];

    }

}
   
console.log(retornaDiaDaSemana("Segunda-feira", 7));