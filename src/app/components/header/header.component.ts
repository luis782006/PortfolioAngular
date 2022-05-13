import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logoName ="My Portfolio";
   ventana:boolean=true;
   
  constructor() { }

  ngOnInit(): void {
   

    
  }
  loginVisible(ventanaVisible:boolean){
    this.ventana=ventanaVisible;
    //console.log(String(this.ventana));
  } 
  cerrandoLogin(ventanaVisible:boolean){
      this.ventana=ventanaVisible;
      
  }
 
}
