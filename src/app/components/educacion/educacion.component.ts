import { Component, OnInit } from '@angular/core';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPen=faPen;
  faTrash=faTrash;
  
  miEducacion:any=[
    {
      "logoInstituto":"logo-Instituto",
      "nombreInstituto":"ARGENTINA PROGRAMA",
      "descripcionInstituto":"Diplomatura Dev Web."
    },
    {
      "logoInstituto":"logo-Instituto",
      "nombreInstituto":"Oracle",
      "descripcionInstituto":"Curso de Base de datos."
    },
    
  
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
