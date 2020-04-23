import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
      sessionStorage.setItem('login','{username: '+this.usuario+', clave:'+this.clave+'}')
      this.router.navigate(['/Principal']);
    }
  }

}
