import { conta } from "../Conta";

export interface ContaRepository {

    procurarPorNumero (numero: number): void;
    listarTodas(): void;
    cadastrar(conta: conta): void;
    atualizar(conta: conta): void;
    deletar(numero: number): void;

//metodo Bancarios
sacar(numero: number, valor: number): void;
depositar(numero: number, valor: number): void;
transferir(numeroOrigem: number, numeroDestino: number,valor: number): void;
}