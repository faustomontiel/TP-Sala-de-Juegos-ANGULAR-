import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router) {  }


  verifLoginJuegos(){
    var logueado = sessionStorage.getItem('login');

    if(logueado){
      this.router.navigate(['/Juegos']);
    }else
    {
      this.router.navigate(['/Login']);
    }
  }

  verifLoginListado(){
      var logueado = sessionStorage.getItem('login');
  
      if(logueado){
        this.router.navigate(['/Listado']);
      }else
      {
        this.router.navigate(['/Login']);
      }
    }
    verifLoginConfig(){
      var logueado = sessionStorage.getItem('login');
  
      if(logueado){
        this.router.navigate(['/Juegos']);
      }else
      {
        this.router.navigate(['/Login']);
      }
    }

    verifLoginJugadores(){
      var logueado = sessionStorage.getItem('login');
  
      if(logueado){
        this.router.navigate(['/Jugadores']);
      }else
      {
        this.router.navigate(['/Login']);
      }
    }
    
  ngOnInit() {
  }

 

}
