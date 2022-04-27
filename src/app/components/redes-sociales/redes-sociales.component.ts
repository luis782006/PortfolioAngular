import { Component, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faYoutube,faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter= faTwitter;
  faYoutube= faYoutube;
  faGithub= faGithub;

  

  constructor() { }

  ngOnInit(): void {
  }

}
