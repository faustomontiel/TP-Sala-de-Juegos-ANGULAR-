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
          this.mensajeMonedas = "GANASTE 20 MONEDAS!!";
          localStorage.setItem("monedas", this.monedas.toString());
          $('#monedasID').text(this.monedas.toString());
          $('#mensajeID').text(this.mensajeMonedas);
        }
        else if(slot1R == slot2R || slot2R == slot3R || slot1R == slot3R ){
          var suma = +localStorage.getItem("monedas");
          this.monedas = suma + 20;
          this.mensajeMonedas = "GANASTE 20 MONEDAS!!";
          localStorage.setItem("monedas", this.monedas.toString());
          $('#monedasID').text(this.monedas.toString());
          $('#mensajeID').text(this.mensajeMonedas);
          
        }else{
          var resta = +localStorage.getItem("monedas");   
          this.monedas = resta - 20;
          if(resta>=20){
            this.mensajeMonedas = "Perdiste 20 MONEDAS!";
          }else if(resta<0){
            this.monedas = 20;
            this.mensajeMonedas = "Te quedaste sin monedas, pero te regalamos 20 más!";
          }else{
            this.mensajeMonedas = "Suerte la proxima!";
          }
          localStorage.setItem("monedas", this.monedas.toString());
          $('#monedasID').text(this.monedas.toString());
          $('#mensajeID').text(this.mensajeMonedas);
        } 
       
      },
      3000)

  }
}
