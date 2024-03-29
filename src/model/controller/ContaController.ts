import { ContaRepository } from "../util/repository/ContaRepository";
import { conta } from "../util/Conta";
;

export class ContaController implements ContaRepository {
    

    private listaContas: Array<conta> = new Array<conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
    }
    atualizar(conta: conta): void {
        throw new Error("Method not implemented.");
    }

    listarTodas(): void {
        for (let conta of this.listaContas); 
            conta.visualizar();
        }

        cadastrar(conta: conta): void {
            this.listaContas.push(conta);
            console.log("A Conta foi adicionada!");
        }

            deletar(numero: number): void {
                throw new Error("Method not implemented.");
            }
    sacar(numero: number, valor: number): void {
                throw new Error("Method not implemented.");
            }
    depositar(numero: number, valor: number): void {
                throw new Error("Method not implemented.");
            }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
                throw new Error("Method not implemented.");
            }


        }
    




