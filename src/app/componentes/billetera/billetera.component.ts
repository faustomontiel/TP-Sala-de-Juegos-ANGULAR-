import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {
  @Input() monedasTotales: number;
  @Input() mensaje: string;
  constructor() { }

  ngOnInit(): void {
  }

}
