// function cumprimentaCliente(cliente) {
//     return 'Olá, ' + cliente + '. Essa é sua conta do Trybebank'
// };

// console.log(cumprimentaCliente('Anna'));



// let saldo = 100;

// function adicionaValor(valor) {
//     return 'Seu saldo é: ' + (saldo+valor);
// };

// console.log(adicionaValor(10));

// novoSaldo = 110;

// function subtraiValor(valor2) {
//     return 'Seu saldo é: ' + (novoSaldo-valor2);
// }
// console.log(subtraiValor(50));



// function sacar(valor, saldo) {
//     if (valor >= 1 && saldo >= 0) {
//         if (valor <= saldo) {
//             return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
//         } else {
//             return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
//         }
//     } else {
//         return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
//     }
//   }

//   console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
//   console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
//   console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00


let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let novoCliente;

function adicionaClientes(novoCliente) {
    if (typeof novoCliente === 'string') {
        clientesTrybeBank.push(novoCliente);
        return 'Cliente ' + novoCliente + ' adicionado com sucesso';
    } else {
        return 'ERRO. Cliente inválido';
    }
}

console.log(adicionaClientes('Anna'));
console.log(adicionaClientes(3));
console.log(clientesTrybeBank);

// function removeClient(clientToRemove, clientsDB = clientesTrybeBank) {
//     if (!typeof clientToRemove === 'string') return 'Não é um nome válido';

//     let removedClient = clientsDB.splice(clientsDB.findIndex(clientToRemove), 1);
//     removedClient ? 'Cliente ... removido' : 'Cliente não encontrado';
// }

// function excluiClientes(clienteExcluido) {
//     if (typeof clienteExcluido === 'string') {
//         for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//             if (clienteExcluido === clientesTrybeBank[index]) {
//                 clientesTrybeBank.pop(clienteExcluido);
//                 return clienteExcluido + ' foi excluído com sucesso';
//             }
//         }

//         return 'Cliente não encontrado';
//     }
//     return 'Não é um nome válido';
// };

// console.log(excluiClientes('Elisa'));
// console.log(excluiClientes(3));
// console.log(excluiClientes('Anna'));



// function excluiClientes(clienteExcluido) {
//     if (typeof clienteExcluido === 'string') {
//         for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//             if (clienteExcluido === clientesTrybeBank[index]) {
//                 clientesTrybeBank.pop(clienteExcluido);
//                 return clienteExcluido + ' foi excluído com sucesso';
//             }
//         }

//         return 'Cliente não encontrado';
//     }
//     return 'Não é um nome válido';
// };

// console.log(excluiClientes('Elisa'));
// console.log(excluiClientes(3));
// console.log(excluiClientes('Anna'));


//Verificar se clienteAExcluir é string
function verificaString(clienteAExcluir) {
    if (typeof clienteAExcluir === 'string') {
        return true;
    } else {
        return false;
    }
};

//Verificar se clienteAExcluir está em clientesTrybeBank
function verificaClienteTrybe(clienteAExcluir) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (clienteAExcluir === clientesTrybeBank[index]) {
            return true;
        }
    }
    return false;
};

//Excluir clienteAExcluir
function excluirCliente(clienteAExcluir) {
    let verificacao1 = verificaString(clienteAExcluir);
    if (verificacao1 === false) {
        return 'Cliente inválido';
    }

    let verificacao2 = verificaClienteTrybe(clienteAExcluir);
    if (verificacao2 === false) {
        return 'Cliente não encontrado';
    };

    clientesTrybeBank.pop(clienteAExcluir);
    return clienteAExcluir + ' foi excluído com sucesso';
}

console.log(excluirCliente('Elisa'));
console.log(excluirCliente(3));
console.log(excluirCliente('Anna'));
console.log(excluirCliente('Ada'));