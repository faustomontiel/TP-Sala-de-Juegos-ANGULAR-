import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tragamonedas',
  templateUrl: './tragamonedas.component.html',
  styleUrls: ['./tragamonedas.component.css']
})
export class TragamonedasComponent implements OnInit {
  listadoImagenes: string[];
  monedas:number;
  monedasTot:number;
  mensajeMonedas: string;
  constructor() { 
   // this.monedas = +localStorage.getItem("monedas")
  }

  ngOnInit(): void {

  }

  Jugar(){
    
    $('#slot1').attr('src','./assets/imagenes/slots.gif');
    $('#slot2').attr('src','./assets/imagenes/slots.gif');
    $('#slot3').attr('src','./assets/imagenes/slots.gif');
    
    $('#mensajeID').text('');
    
    setTimeout(
      function(){
        this.listadoImagenes = [
          "./assets/imagenes/seven.png",
          "./assets/imagenes/cereza.png",
          "./assets/imagenes/bell.png",
          "./assets/imagenes/orange.png",
          "./assets/imagenes/diamante.png"];
    
        var slot1R = this.listadoImagenes[Math.floor(Math.random()*this.listadoImagenes.length)];
        var slot2R = this.listadoImagenes[Math.floor(Math.random()*this.listadoImagenes.length)];
        var slot3R = this.listadoImagenes[Math.floor(Math.random()*this.listadoImagenes.length)];
    
        $('#slot1').attr('src',slot1R);
        $('#slot2').attr('src',slot2R);
        $('#slot3').attr('src',slot3R);
    
        if (slot1R == slot2R && slot1R == slot3R)
        {
          var suma = +localStorage.getItem("monedas");
          this.monedas = suma + 50;
          this.mensajeMonedas = "GANASTE 50 MONEDAS!!";
          localStorage.setItem("monedas", this.monedas.toString());
          $('#monedasID').text(this.monedas.toString());
          $('#mensajeID').text(this.mensajeMonedas);
          $('#mensajeID').css("background-color", "green");
        }
        else if(slot1R == slot2R || slot2R == slot3R || slot1R == slot3R ){
          var suma = +localStorage.getItem("monedas");
          this.monedas = suma + 20;
          this.mensajeMonedas = "GANASTE 20 MONEDAS!!";
          localStorage.setItem("monedas", this.monedas.toString());
          $('#monedasID').text(this.monedas.toString());
          $('#mensajeID').text(this.mensajeMonedas);
          $('#mensajeID').css("background-color", "green");
          //$("p").css("background-color", "yellow");
        }else{
          var resta = +localStorage.getItem("monedas");   
          this.monedas = resta - 20;
          if(resta>=20){
            this.mensajeMonedas = "Perdiste 20 MONEDAS!";
            $('#mensajeID').css("background-color", "red");
          }else if(resta=0){
            this.monedas = 20;
            this.mensajeMonedas = "No tienes monedas, pero te regalamos 20";
            $('#mensajeID').css("background-color", "green");
          }else{
            this.monedas = 20;
            this.mensajeMonedas = "No tienes monedas, pero te regalamos 20";
            $('#mensajeID').css("background-color", "green");  
          }
          localStorage.setItem("monedas", this.monedas.toString());
          $('#monedasID').text(this.monedas.toString());
          $('#mensajeID').text(this.mensajeMonedas);
        } 
       
      },
      3000)

  }
}
