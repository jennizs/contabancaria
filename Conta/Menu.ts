import readlinesync = require("readline-sync");

export function main () {

    let opcao: number;

    while (true){

        console.log("***********************************************");
        console.log("                                               ");
        console.log("       Bem Vinde ao banco Brazil com z         ");
        console.log("                                               ");
        console.log("********xx********************xx***************");
        console.log("***********************************************");
        console.log("********tecle o numero que deseje acessar******");
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
        console.log("********************************************** ");

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt(" ");

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");
                break;

            case 2:
                console.log("\n\nListar Conta\n\n");
                break;

            case 3:
                console.log("\n\nBuscar Conta por numero\n\n");
                break;

            case 4:
                console.log("\n\nAtualizar dados das contas\n\n");
                break;

            case 5:
                console.log("\n\nApagar Conta\n\n");
                break;

            case 6:
                console.log("\n\nSacar\n\n");
                break;

            case 7:
                console.log("\n\nDepositar\n\n");
                break;

            case 8:
                console.log("\n\nTransferir valores entre as contas\n\n");
                break;

            case 9:
                console.log("\n\nSair\n\n");
                console.log("\nBanco Brazil com Z - O seu Futuro começa aqui!");
                sobre();
                return; // Encerra a função main(), saindo do loop while.

            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jennifer Fernandes ");
    console.log("Generation Brasil - jennyfrn6104@gmail.com");
    console.log("github.com/ jennizs");
    console.log("*****************************************************");
}

main(); // Chamada da função principal