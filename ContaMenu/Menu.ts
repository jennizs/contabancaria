import readlinesync = require("readline-sync");
import { colors } from "../src/model/util/Colors";
import { conta } from "../src/model/util/Conta";
import { ContaController } from "../src/model/controller/ContaController";
import { ContaCorrente } from "../src/model/util/ContaCorrente";
import { ContaPoupanca } from "../src/model/util/ContaPoupança";

export function main() {

    let opcao: number;
    let conta: ContaController = new ContaController();

    let cc1: ContaCorrente = new ContaCorrente(1, 123, "Jennifer", 6767, 1000000, 1);

     cc1.visualizar();

    cc1.sacar(1000);

    cc1.visualizar();

    cc1.depositar(5000);

    cc1.visualizar(); 

   let cp: ContaPoupanca = new ContaPoupanca(10, 123, "Jennifer", 6767, 100000, 1);
   


    cp.visualizar();
    cp.sacar(200);
    cp.visualizar();
    cp.depositar(1000);
    cp:visualizar();





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
                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados das contas\n\n", colors.reset);
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Conta\n\n", colors.reset);
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
