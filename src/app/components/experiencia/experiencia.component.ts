import { Component, OnInit } from '@angular/core';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  faPen=faPen;
  faTrash=faTrash;
  miExperiencia:any=[
    {
      "logoEmpresa":"logo-Empresa",
      "nombreEmpresa":"Google",
      "descripcionEmpresa":"Estuve trabajando con el equipo de Instagram. Haciendo deploy."
    },
    {
      "logoEmpresa":"logo-Empresa",
      "nombreEmpresa":"Faceboo",
      "descripcionEmpresa":"Estuve trabajando con el equipo en facebook. Haciendo cosas."
    },
    
  
   
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
