import { conta } from "../conta";

export interface ContaRepository {

    procurarPorNumero (numero: number): void;
    listarTodas(): void;
    cadastrar(contas: conta): void;
    atualizar(contas: conta): void;
    deletar(numero: number): void;

//metodo Bancarios
sacar(numero: number, valor: number): void;
depositar(numero: number, valor: number): void;
transferir(numeroOrigem: number, numeroDestino: number,valor: number): void;
}