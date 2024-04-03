import { ContaRepository } from "../repository/ContaRepository";
import { conta } from "../conta";


export class ContaController implements ContaRepository {
    procurarPorTitular(titular: string): void {
        throw new Error("Method not implemented.");
    }
    

    private listaContas: Array<conta> = new Array<conta>();
    public numero: number = 0;
    tipo: any;

    procurarPorNumero(numero: number): void {
             let buscaConta = this.buscarNoArray(numero);

             if(buscaConta !== null)
                  buscaConta.visualizar();
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
        for (let contas of this.listaContas) 
            contas.visualizar();
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
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true)
                console.log(`O Saque na Conta número ${numero} foi Efetuado com êxito!`)
        }else
            console.log("\nConta não foi Encontrada!")
    }
    
           
    depositar(numero: number, valor: number): void {
                let buscaConta = this.buscarNoArray(numero);

                if(buscaConta !== null){
                    buscaConta.depositar(valor)
                    console.log(`O Depósito na Conta número ${numero} foi Efetuado com sucesso!`)
                }else
                    console.log("\nConta não foi Encontrada!")
            }
            
   
            transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor)
                console.log(`A Transferência da conta ${numeroOrigem} para a conta ${numeroDestino} 
                    foi Efetuada com êxito!`)
            }

        }else
            console.log("\nConta de Origem e/ou a Conta de Destino não foram Encontradas!")
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
    




