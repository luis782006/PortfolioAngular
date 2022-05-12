import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { faFacebook,faTwitter,faYoutube,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
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
  faLinkedin=faLinkedin;
  faBars=faBars;

  ventanaVisible:boolean=true;

  @Output() visible=new EventEmitter<boolean>();
   

  constructor() { }

  ngOnInit(): void {
    
  }
  onVisible(){
      this.visible.emit(this.ventanaVisible);
      
  }

}
