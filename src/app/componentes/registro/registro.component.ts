import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { AngularFireAuth } from 'angularfire2/auth';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/
  constructor( private authFire:AngularFireAuth,private route:Router) { }

  ngOnInit() {
  }
  errorFire:string;
  jugador = new Jugador();

  async registrarDo(jugador:Jugador){
    try {
    let clave1 = document.getElementById('psw').nodeValue;
    let clave2 = document.getElementById('psw-repeat').nodeValue;
   
    if(clave1 === clave2 ){
        if(jugador.usuario != undefined && jugador.clave != undefined){  
          var result = await this.authFire.auth.createUserWithEmailAndPassword(jugador.usuario,jugador.clave);
        }else{
          this.errorFire = "Se debe ingresar el mail y el password";
        }  

        if(result){
          sessionStorage.setItem('login','{username: '+this.jugador.usuario+', clave:'+this.jugador.clave+'}')
          this.route.navigate(['/Principal']);  
      } 
    }else{
      this.errorFire = "Las claves deben ser iguales";
    }  
      
    } catch (error) {
      this.errorFire = error.message; 
    }
  }

}
