import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juego: JuegoPiedraPapelTijera;
  enJuego:boolean = false;
  contesto:boolean;
  public imagenMaquina:string = "./././assets/imagenes/newgame.jpeg";
  public imagenUsuario:string = "./././assets/imagenes/newgame.jpeg";
  Mensajes: string;

  constructor() { }

  ngOnInit(): void {
  }

  empezar()
  {
    this.imagenMaquina = "./././assets/imagenes/newgame.jpeg";
    this.imagenUsuario = "./././assets/imagenes/newgame.jpeg";
    this.contesto = false;
    this.juego = new JuegoPiedraPapelTijera();
    this.juego.JugarMaquina();
    $("#esperando").css("display", "");
    $("#resultado").css("display", "none");
    this.enJuego = true;
    
  }

  async jugada(jugadaUser: number)
  {
    this.juego.jugadaUsuario = jugadaUser;
    this.contesto = true;
    this.setImagenUsuario();
    this.setImagen();
    //await delay(500);
    this.remate();
  }

  remate()
  {
    this.juego.verificarJugada();

    switch(this.juego.resultado)
    {
      case -1:
          this.MostarMensaje("Perdiste, la maquina juega bien!", -1);
          break;
      case 0:
          this.MostarMensaje("Empate", 0);
          break;
      case 1:
          this.MostarMensaje("Ganaste, Felicidades!", 1);
          break;
    }

    let segundos = 2;
    let intervalo = setInterval(()=>
    {
      segundos = segundos -1;
      console.log(segundos);
      if(segundos == 0)
      {
        this.enJuego = false;
        clearInterval(intervalo);
      }
    },1000);

  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:number=0) {
    switch(ganador){
      
      case 0:
        $('#mensajeID').text("Empateee!");
        $('#mensajeID').css("background-color", "green");
        $("#esperando").css("display", "none");
        $("#resultado").css("display", "");
          break; 
      case 1:
        $('#mensajeID').text("Ganaste!");
        $('#mensajeID').css("background-color", "green");
        $("#esperando").css("display", "none");
        $("#resultado").css("display", "");
        break;
      default:
            $('#mensajeID').text("Perdiste!");
            $('#mensajeID').css("background-color", "red");
            $("#esperando").css("display", "none");
            $("#resultado").css("display", "");
          break;  
    }

  setTimeout(function(){ 
    }, 3000);
 }

  setImagen()
  {
    switch(this.juego.jugadaMaquina)
    {
      case 1:
        this.imagenMaquina = "./././assets/imagenes/piedra.jpg";
        break;
      case 2:
        this.imagenMaquina = "./././assets/imagenes/papel.jpg";
        break;
      case 3:
        this.imagenMaquina = "./././assets/imagenes/tijera.jpg";
        break;
    }


    switch(this.juego.jugadaUsuario)
    {
      case 1:
        this.imagenUsuario = "./././assets/imagenes/piedra.jpg";
        break;
      case 2:
        this.imagenUsuario = "./././assets/imagenes/papel.jpg";
        break;
      case 3:
        this.imagenUsuario = "./././assets/imagenes/tijera.jpg";
        break;
    }
  }

  setImagenUsuario()
  {
  }




}
