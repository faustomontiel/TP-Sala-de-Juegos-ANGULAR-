import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { 
   this.verifUserLogin();
   
  }

  userLogueado:boolean;

  verifUserLogin(){
    var logueado = sessionStorage.getItem('login');
  
      if(logueado){
        this.userLogueado = true;
      }else
      {
        this.userLogueado = false;
      }
  }

  terminarSession(){
    sessionStorage.removeItem('login');
    this.router.navigate(['/Principal']);
    window.location.reload();

  }


  ngOnInit(): void {
  }

}
