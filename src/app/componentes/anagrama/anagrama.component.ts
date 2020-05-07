import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css'],
  
})
export class AnagramaComponent implements OnInit {

  enJuego: boolean = false;
  juego: JuegoAnagrama;
  ocultarVerificar:boolean = false;
  Mensajes: string;

  constructor() 
  {
    this.juego = new JuegoAnagrama();
  }

  ngOnInit() {
  }

  NuevoJuego()
  {
    this.refresh();
    this.ocultarVerificar = true;
    this.enJuego = true;
    this.desordenar();
  }

  Verificar()
  {
    this.ocultarVerificar = false;

    if(this.juego.verificar())
    {
      this.MostarMensaje("Ganaste genio!!!", true);
    }
    else
    {
      this.MostarMensaje("Perdiste", false);
    }

    this.enJuego = false
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    if(ganador)
      {
        $('#mensajeID').text(this.Mensajes);
        $('#mensajeID').css("background-color", "green");
      }else{
        $('#mensajeID').text(this.Mensajes);
        $('#mensajeID').css("background-color", "red");
      }
    var modelo=this;
    setTimeout(function(){ 
           modelo.ocultarVerificar=true;
     }, 3000); 
   }

   
   public desordenar()
   {
       this.juego.palabraRandom = Math.floor(Math.random() * 26) + 1;

       this.juego.palabraDesordenada = this.juego.diccionario[this.juego.palabraRandom];

       let array: Array<string> = this.juego.palabraDesordenada.split("");

       array.sort(function() 
       {
           let retorno = Math.floor((Math.random() * 3)) - 1;

           while(retorno == 0)
           {
               retorno = Math.floor((Math.random() * 3)) - 1;
           }

           return retorno;
       });

       this.juego.palabraDesordenada = array.join("");
   }

   refresh()
   {
    this.juego.palabraRandom = 0;
    this.juego.palabraUser = "";
    this.juego.palabraDesordenada = "";
    this.juego.gano = false;
   }


}
