import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Input() ancho:number=0;
  // @Input() alto:number=0;
  


  constructor() { }

  ngOnInit(): void {
  }
  abrirVentana(){
    //this.ancho=300;
    //this.alto=250;
  }

}
