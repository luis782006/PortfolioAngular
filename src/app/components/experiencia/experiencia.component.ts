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
      "logoEmpresa":"logo",
      "nombreEmpresa":"Google",
      "descripcionEmpresa":"Lorem ipsum dolor sit amet. A dolore odit et eligendi tempora nam rerum dolores est nemo consequatur qui enim dignissimos? Sit culpa iusto aut animi deleniti est doloremque odit aut similique corporis At voluptas perspiciatis et quidem accusantium. Eos necessitatibus impedit qui internos commodi et possimus doloremque est magnam necessitatibus! Hic commodi recusandae ut enim harum sit voluptas optio!."
    },
    {
      "logoEmpresa":"logo",
      "nombreEmpresa":"Facebook",
      "descripcionEmpresa":"Lorem ipsum dolor sit amet. A dolore odit et eligendi tempora nam rerum dolores est nemo consequatur qui enim dignissimos? Sit culpa iusto aut animi deleniti est doloremque odit aut similique corporis At voluptas perspiciatis et quidem accusantium. Eos necessitatibus impedit qui internos commodi et possimus doloremque est magnam necessitatibus! Hic commodi recusandae ut enim harum sit voluptas optio!"
    },
    
  
   
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
