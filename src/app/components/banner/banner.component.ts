import { Component, OnInit } from '@angular/core';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faPen=faPen;
  bannerPath:string="../../../assets/programación-mitos.jpg";
  portfolio_pic_Path:string="../../../assets/profile-pic.jpg";
  
   constructor(private datosPortfolio:PortfolioService ) { }

  ngOnInit(): void {
    
   this.datosPortfolio.obtenerDatos();
   
  }

}
