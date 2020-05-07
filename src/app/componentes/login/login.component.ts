import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { AngularFireAuth } from 'angularfire2/auth';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  //usuario = '';
  //clave= '';
  jugador = new Jugador();
  errorFire:string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authFire:AngularFireAuth) {
  }

  ngOnInit() {
  }

  async Entrar() {
    try{
      if(this.jugador.usuario != undefined && this.jugador.clave != undefined){  
          if (this.jugador.usuario === 'admin' && this.jugador.clave === 'admin') {
            sessionStorage.setItem('login','{username: '+this.jugador.usuario+', clave:'+this.jugador.clave+'}')
            this.router.navigate(['/Principal']);
          }
          else
          {   
            var result = await this.authFire.auth.signInWithEmailAndPassword(this.jugador.usuario,this.jugador.clave);
          
          }

          if(result){
            sessionStorage.setItem('login','{username: '+this.jugador.usuario+', clave:'+this.jugador.clave+'}')
            this.router.navigate(['/Principal']);
          }

      }else{
        this.errorFire = "Se debe ingresar el mail y el password"; 
      }      
    } catch(err){
      this.errorFire = err.message;
    }

  }
}
