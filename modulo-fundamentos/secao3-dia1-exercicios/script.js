// let a = 1;
// let b = 3;
// let c = 5;

// let soma = a + b;
// console.log(soma);

// let multiply = a * b;
// console.log(multiply);

// if (b>a) {
//     console.log('b é maior que a');
// } else {
//     console.log('b é menor que a');
// }

// if (b>a && b>c)  {
//     console.log('b é o maior');
// } else if (c>a && c>3) {
//     console.log('c é o maior');
// } else {
//     console.log('a é o maior');
// }

let valor = -5;

if (valor > 0) {
    console.log('positive');
} else if (valor < 0) {
    console.log('negative');
} else {
    console.log('zero');
};


let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 46;

let somaAngulos = angulo1 + angulo2 + angulo3;

let somaAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(somaAngulosPositivos){
    if(somaAngulos === 180) {
        console.log(true);
} else {
        console.log(false);
};
} else {
        console.log('erro');
}