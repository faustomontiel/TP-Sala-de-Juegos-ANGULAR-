import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

export class JuegoAgilidad {
    numeroIngresado:number;
    gano:boolean;

    numberOne:number;
    numberTwo:number;
    resultado:number;
    signo:string;
    signos: Array<string> = ["+","-","*"];

    refresh(){
        this.numeroIngresado = 0;
        this.gano = false;
    }

    cuenta(){
        this.numberOne =  Math.floor((Math.random() * 10));
        this.numberTwo =  Math.floor((Math.random() * 10));
        this.signo = this.signos[Math.floor(Math.random() * this.signos.length)];
        this.calculo(); 
    }

    calculo(){

        switch(this.signo){
            case "+":
                this.resultado = this.numberOne + this.numberTwo; 
                break;
            case "-":
                this.resultado = this.numberOne - this.numberTwo;
                break;  
            case "*":
                this.resultado = this.numberOne * this.numberTwo;
                break;         
        }

    }

    public verifResult():boolean{
        if(this.resultado == this.numeroIngresado){
            this.gano = true;
        }else{
            this.gano = false;
        }
        return this.gano;
    }







}
