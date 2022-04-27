import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ancho=768;
  logoName ="My Portfolio";

  constructor() { }

  ngOnInit(): void {
  }

}
