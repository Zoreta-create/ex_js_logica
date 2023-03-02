alert("Vamos aprender matemática?");
let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");

let soma = Number(n1) + Number(n2);
alert(`A soma desses dois números é: ${soma}`);

let sub = Number(n1) - Number(n2);
alert(`A subtração desses dois números é: ${sub}`);

let mult = Number(n1) * Number(n2);
alert(`A multiplicação desses dois números é: ${mult.toFixed(2)}`);

let div = Number(n1) / Number(n2);
alert(`A divisão desses dois números é: ${div}`);

let rest = Number(n1) % Number(n2).toFixed(2);
alert(`O resto da divisão desses dois números é: ${rest}`);

const restsoma = (Number(n1) + Number(n2)) % 2

if (restsoma == 0) {
    alert(`A soma dos dois números é par: ${soma}`)
} else {
    alert(`A soma dos dois números é ímpar: ${soma}`) 
}

const identification = Number(n1) != Number(n2)

if (identification) {
    alert("Os dois números inseridos são diferentes")
} else { 
    alert("Os dois números inseridos são iguais")
}

