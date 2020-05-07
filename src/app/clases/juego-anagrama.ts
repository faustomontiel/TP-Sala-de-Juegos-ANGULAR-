import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego 
{

    palabraRandom: number = 0;
    palabraUser: string = "";
    palabraDesordenada: string = "";

    public diccionario: {[id: number]: string;} = {
        1:"ARGENTINA", 
        2:"ANAGRAMA", 
        3:"CELULAR", 
        4:"PERRO",
        5: "ANGULAR", 
        6: "FIREBASE", 
        7: "MONITOR", 
        8: "PATO",
        9: "ESCRITORIO",
        10: "LUZ",
        11: "LAMPARA",
        12: "AUTO",
        13: "ESPEJO",
        14: "CPU",
        15: "RELOJ",
        16: "MANO",
        17: "PELOTA",
        18: "CASTILLO",
        19: "EDIFICIO",
        20: "CALLE",
        21: "BARRIO",
        22: "NOMBRE",
        23: "PELO",
        24: "NARIZ",
        25: "ABEJA",
        26: "ANTEOJOS"
    };

    
    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Anagrama",gano,jugador);
    }

    public verificar(): boolean 
    {
        if(this.diccionario[this.palabraRandom] == this.palabraUser.toUpperCase())
        {
            this.gano = true;
        }

        return this.gano;
    }


    
}
