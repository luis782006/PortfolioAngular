import { Component, OnInit } from '@angular/core';
import {faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faPen=faPen;
  bannerPath:string="../../../assets/programación-mitos.jpg";
  portfolio_pic_Path:string="../../../assets/profile-pic.jpg";
  
   constructor() { }

  ngOnInit(): void {
    
  
   
  }

}
