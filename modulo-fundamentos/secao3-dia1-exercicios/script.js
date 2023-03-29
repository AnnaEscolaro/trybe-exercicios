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

// let valor = -5;

// if (valor > 0) {
//     console.log('positive');
// } else if (valor < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// };


// let angulo1 = 90;
// let angulo2 = 45;
// let angulo3 = 46;

// let somaAngulos = angulo1 + angulo2 + angulo3;

// let somaAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

// if(somaAngulosPositivos){
//     if(somaAngulos === 180) {
//         console.log(true);
// } else {
//         console.log(false);
// };
// } else {
//         console.log('erro');
// }

// let moves = 'anna';

// switch(moves) {
//     case 'rainha':
//         console.log('move xyz');
//         break;
//     case 'peao':
//         console.log('move xpto');
//         break;
//     case 'rei':
//         console.log('move abc');
//         break;
//     default:
//         console.log('não é uma peça de xadrex :/');
// }

// let grade = 62;

// if (grade >=90 && grade <= 100) {
//     console.log('A');
// }
// else if (grade >=80) {
//     console.log('B');
// }
// else if (grade >=70) {
//     console.log('C');
// }
// else if (grade >=60) {
//     console.log('D');
// }
// else if (grade >=50) {
//     console.log('E');
// }
// else {
//     console.log('F');
// }

let salarioBruto = 5000;
let aliquotaInss;
let inss;
let baseCalculoIR;
let aliquotaIR;
let deducaoIR;
let impostoRenda;


if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08;
    inss = salarioBruto * aliquotaInss;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = 0.09;
    inss = salarioBruto * aliquotaInss;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = 0.11;
    inss = salarioBruto * aliquotaInss;
} else {
    inss = 570.88;
}

baseCalculoIR = salarioBruto - inss;

if (baseCalculoIR <= 1903.98) {
    aliquotaIR = 0;
    deducaoIR = 0;
} else if (baseCalculoIR <= 2826.65) {
    aliquotaIR = 0.075;
    deducaoIR = 142.80;
} else if (baseCalculoIR <= 3751.08) {
    aliquotaIR = 0.15;
    deducaoIR = 354.80;
} else if (baseCalculoIR <= 4664.68) {
    aliquotaIR = 0.225;
    deducaoIR = 636.13;
} else {
    aliquotaIR = 0.275;
    deducaoIR = 869.36;
};

impostoRenda = (baseCalculoIR * aliquotaIR) - deducaoIR;

let salarioLiquido = salarioBruto - inss - impostoRenda;
console.log(salarioLiquido);