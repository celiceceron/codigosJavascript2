/*
Crie uma função que recebe 3 parâmetros e retorna Tem Negativo!
Caso pelo menos 1 deles seja menor que 0.
Caso contrário, ela deve retornar Tudo positivo!
*/


const positivoENegativo = (num1, num2, num3) => {

    if(num1 >= 0 && num2 >= 0 && num3 >= 0)
        return "Tudo positivo!"
    else
        return "Tem Negativo!"

}

console.log(positivoENegativo(3, 4, -6));
console.log(positivoENegativo(3, 4, 6));