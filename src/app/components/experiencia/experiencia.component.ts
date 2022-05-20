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
      "posicion":"Recepcionista",
      "descripcionEmpresa":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus aperiam recusandae et, temporibus fugiat illum atque quisquam ipsam tempore est at. Laborum quaerat blanditiis incidunt unde neque, vero reprehenderit ipsa voluptas quo assumenda tenetur totam porro velit, nulla dicta, fugiat iusto dolores. Nostrum iusto debitis repellendus amet dicta sapiente! "
    },
    {
      "logoEmpresa":"logo",
      "nombreEmpresa":"Facebook",
      "posicion":"Relaciones Publicas",
      "descripcionEmpresa":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus aperiam recusandae et, temporibus fugiat illum atque quisquam ipsam tempore est at. Laborum quaerat blanditiis incidunt unde neque, vero reprehenderit ipsa voluptas quo assumenda tenetur totam porro velit, nulla dicta, fugiat iusto dolores. Nostrum iusto debitis repellendus amet dicta sapiente! "
    },{
      "logoEmpresa":"logo",
      "nombreEmpresa":"Facebook",
      "posicion":"Relaciones Publicas",
      "descripcionEmpresa":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus aperiam recusandae et, temporibus fugiat illum atque quisquam ipsam tempore est at. Laborum quaerat blanditiis incidunt unde neque, vero reprehenderit ipsa voluptas quo assumenda tenetur totam porro velit, nulla dicta, fugiat iusto dolores. Nostrum iusto debitis repellendus amet dicta sapiente! "
    }
    
  
   
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
