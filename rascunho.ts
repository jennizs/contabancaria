import readlinesync = require("readline-sync");
import { colors } from "../src/model/util/Colors";
import { conta } from "../src/model/util/Conta";
import { ContaController } from "../src/model/controller/ContaController";
import { ContaCorrente } from "../src/model/util/ContaCorrente";
import { ContaPoupanca } from "../src/model/util/ContaPoupança";

export function main() {

    let opcao, numero, tipo, agencia, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];
    
    let conta: ContaController = new ContaController();

    let cc1: ContaCorrente = new ContaCorrente(conta.gerarNumero(), 1, "Jennifer", 123, 6767, 1000000);

  
   let cp: ContaPoupanca = new ContaPoupanca(conta.gerarNumero(), 10, "Jennifer", 123, 6767, 100000);


   

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta,)
        console.log("***********************************************");
        console.log("                                               ");
        console.log("       Bem Vinde ao banco Brazil com z         ");
        console.log("                                               ");
        console.log("************xx****************xx***************");
        console.log("***********************************************");
        console.log("********tecle o numero que deseja acessar******");
        console.log("                                               ");
        console.log("          1-)Crie sua conta                    ");
        console.log("          2-) Listar todas as contas           ");
        console.log("          3-) Buscar conta por numero          ");
        console.log("          4-) Atualizar Dados da conta         ");
        console.log("          5-) Apagar conta                     ");
        console.log("          6-) Sacar                            ");
        console.log("          7-) Depositar                        ");
        console.log("          8-)Transferir valores entre contas   ");
        console.log("          9-) Sair                             ");
        console.log("                                               ");
        console.log("***********************************************");
        console.log("                                               ",
            colors.reset);

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt(" ");

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log("Digite o numero da agencia: ");
                    agencia = readlinesync.questionInt("")

                    console.log("Digite o nome do Titular: ");
                    titular = readlinesync.question("")

                    console.log("Informe o tipo da conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "",{cancel: false}) + 1

                    console.log("Digite o saldo da conta: ");
                    saldo = readlinesync.questionFloat("")
                

                    switch(tipo){
                        case 1:
                            console.log("Digite o limite da conta: ");
                        limite = readlinesync.questionFloat("")
                        conta.cadastrar(
                            new ContaCorrente(conta.gerarNumero(), agencia, titular, tipo, saldo, limite)
                        )
                        break;

                        case 2:
                            console.log("Digite o dia do Aniversario da conta: ");
                        aniversario = readlinesync.questionInt("");
                        conta.cadastrar(
                            new ContaPoupanca(conta.gerarNumero(), agencia, titular, tipo, saldo, aniversario)
                        );
                        break;
                    

                    }

                keyPress()
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Conta\n\n", colors.reset);
                keyPress()

                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Conta por numero\n\n", colors.reset);
                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("")

                    conta.procurarPorNumero(numero);

                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados das contas\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("")

                    let conta = conta.buscarNoArray(numero)
                    
                    if (conta !== null) {

                        console.log(colors.fg.whitestrong,
                            "\n\nCriar Conta\n\n", colors.reset);
        
                            console.log("Digite o numero da agencia: ");
                            agencia = readlinesync.questionInt("")
        
                            console.log("Digite o nome do Titular: ");
                            titular = readlinesync.question("")
         
                            tipo = conta.tipo     

                            console.log("Digite o saldo da conta: ");
                            saldo = readlinesync.questionFloat("")
        
                            switch(tipo){
                                case 1:
                                    console.log("Digite o limite da conta: ");
                                limite = readlinesync.questionFloat("")
                                conta.atualizar(
                                    new ContaCorrente(numero, agencia, titular, tipo, saldo, limite)
                                )
                                break;
        
                                case 2:
                                    console.log("Digite o dia do Aniversario da conta: ");
                                aniversario = readlinesync.questionInt("");
                                conta.atualizar(
                                    new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario)
                                    )
                    } else 
                    console.log("A conta nao foi encontrada!");
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Conta\n\n", colors.reset);
                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("")
                    conta.deletar(numero);

                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSacar\n\n", colors.reset);
                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepositar\n\n", colors.reset);
                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferir valores entre as contas\n\n", colors.reset);
                keyPress()
                break;

            case 9:
                console.log("\n\nSair\n\n");
                console.log(colors.fg.whitestrong,
                    "\nBanco Brazil com Z - O seu Futuro começa aqui!", colors.reset);
                sobre();
                return; // Encerra a função main(), saindo do loop while.

            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }
}


function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por: Jennifer Fernandes ");
    console.log("Generation Brasil - jennyfrn6104@gmail.com");
    console.log("github.com/ jennizs");
    console.log("*****************************************************");
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();

function visualizar() {
    throw new Error("Function not implemented.");
}

