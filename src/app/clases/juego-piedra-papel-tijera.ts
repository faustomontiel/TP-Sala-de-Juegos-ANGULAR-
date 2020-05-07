import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera  extends Juego{

    jugadasPosibles: Array<number> = [1, 2, 3];
    public jugadaMaquina: number = 0;
    public jugadaUsuario: number = 0;
    public resultado: number = -2;

    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Piedra, Papel o Tijera",gano,jugador);
    }

    public JugarMaquina() 
    {
        this.jugadaMaquina = this.jugadasPosibles[Math.floor(Math.random() * this.jugadasPosibles.length) ];
        console.log(this.jugadaMaquina);
    }


    public verificarJugada(): void 
    {
        switch (this.jugadaUsuario) 
        {
            case 1: 
                if (this.jugadaMaquina == 1) 
                {
                    this.resultado = 0 
                } 
                else 
                {
                    if (this.jugadaMaquina == 2)
                    {
                        this.resultado = -1
                    }
                    else
                    {
                        this.resultado = 1 
                    }
                }
                break;

            case 2: 
                if (this.jugadaMaquina == 1) 
                {
                    this.resultado = 1 
                } 
                else 
                {
                    if (this.jugadaMaquina == 2)
                    {
                        this.resultado = 0
                    }
                    else
                    {
                        this.resultado = -1 
                    }
                }
                break;

            case 3: 
                if (this.jugadaMaquina == 1) 
                {
                    this.resultado = -1 
                } 
                else 
                {
                    if (this.jugadaMaquina == 2)
                    {
                        this.resultado = 1
                    }
                    else
                    {
                        this.resultado = 0
                    }
                }
                break;
        }
        this.verificar();
    }

    verificar(): boolean 
    {
        if(this.resultado == 1)
        {
            this.gano = true;
        }

        this.resetear();

        return this.gano;
    }

    resetear()
    {
        this.jugadaMaquina = 0;
        this.jugadaUsuario = 0;
    }




}
