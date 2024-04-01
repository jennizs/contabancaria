import { ContaRepository } from "../util/repository/ContaRepository";
import { conta } from "../util/conta";


export class ContaController implements ContaRepository {
    

    private listaContas: Array<conta> = new Array<conta>();
    public numero: number = 0;
    tipo: any;

    procurarPorNumero(numero: number): void {
             let buscaConta = this.buscarNoArray(numero);

             if(buscaConta !== null)
                  buscaConta.visualizar()
                else 
                console.log("\nConta nao foi encontrada!");
    }
    atualizar(conta: conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
           this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A Conta numero ${conta.numero} foi atualizada com sucesso!`);
        }else 
           console.log("\nConta nao foi encontrada!");
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
                let buscaConta = this.buscarNoArray(numero);

                if(buscaConta !== null){
                    this.listaContas.splice(this.listaContas.indexOf(buscaConta, 1))
                    console.log(`A Conta numero ${numero} foi excluida com sucesso!`);
                }else 
                   console.log("\nConta nao foi encontrada!");
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
        // Metodos auxiliares
public gerarNumero(): number{
    return ++ this.numero
}

public buscarNoArray(numero: number): conta | null{
    for (let conta of this.listaContas){ 
    if (conta.numero === numero)
    return conta;

}
 return null;

}

}
    




