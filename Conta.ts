export class conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get_numero() {
        return this._numero;
    }

    public set_numero(numero: number) {
        this._numero = numero;
    }

    public get_agencia() {
        return this._agencia;
    }

    public set_agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get_tipo() {
        return this._tipo;
    }

    public set_tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get_titular() {
        return this._titular;
    }

    public set_titular(titular: string) {
        this._titular = titular;
    }

    public get_saldo() {
        return this._saldo;
    }

    public set_saldo(saldo: number) {
        this._saldo = saldo;
    }

    public sacar(valor: number): boolean {
        if(this._saldo >= valor){
            this.set_saldo(this._saldo - valor)
        return true;
        
        
    }
        console.log("Saldo é insuficiente!");
        return false;

    }

    public depositar(valor: number): void {
        this.set_saldo(this._saldo + valor);
    }

    public visualizar(): void {
        let tipo: string = "";
        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
            default:
                tipo = "Tipo de conta desconhecido";
                break;
        }
        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo);
    }
}
