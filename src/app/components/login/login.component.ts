import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ventanaVisible:boolean=false;
  
  @Input()
  ventana: boolean = false;
  @Output() cerrar=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  cerrarLogin(){
    this.cerrar.emit(this.ventanaVisible);
    
  }
  

}
