import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerPath:string="../../../assets/programación-mitos.jpg";
  portfolio_pic_Path:string="../../../assets/profile-pic.jpg";

  valor:boolean=false;
  otraVar:string="";


   constructor() { }

  ngOnInit(): void {
    
    if (window.screen.width<=768){
      this.valor=true;
    }
   
  }

}
