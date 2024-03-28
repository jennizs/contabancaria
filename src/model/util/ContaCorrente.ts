import { conta } from "../Conta";
export class ContaCorrente extends conta {

 private _limite: number;


	constructor(limite: number, agencia: number, titular: string, tipo: number, saldo: number, numero: number) {
		super(numero, agencia, tipo, titular, saldo);
		this._limite = limite;
	}


    /**
     * Getter limite
     * @return {number}
     */
	public get limite(): number {
		return this._limite;
	}

  
    /**
     * Setter limite
     * @param {number} value
     */
	public set limite(value: number) {
		this._limite = value;
	}


	 public sacar(valor: number): boolean {

		if((this.saldo + this._limite) >= valor){
            this.saldo = this.saldo - valor; 
            return true;
        }
		console.log("Saldo insuficiente!");
		return false;
	}
	
	public visualizar(): void {
		super.visualizar();
		console.log("limite: " + this.limite);
	

}
	}
