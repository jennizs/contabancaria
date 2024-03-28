import readlinesync = require("readline-sync");
import { colors } from "../src/model/util/Colors"; 
import { conta } from "../src/model/Conta";

export function main () {

    // let opcao: number;

    // let c1: conta = new conta(1, 123, 1, "Jennifer", 1000000);
    
    // c1.visualizar();

    // c1.sacar(1000);
    // c1.visualizar();
    
    // c1.depositar(50000);
    // c1.visualizar();

    while (true){

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

main(); // Chamada da função principal