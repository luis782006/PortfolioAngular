import { Component, OnInit } from '@angular/core';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faPen=faPen;
  faTrash=faTrash;

  proyectos:any[] = [
    {"imagenProyecto":"../../../assets/profile-pic.jpg",
     "nombreProyecto":"Gestor de mensajes",
     "fechaProyecto":"2020-06-01",
     "descripcionProyecto":"Lorem ipsum dolor sit amet. Et commodi magni non dignissimos minima non atque doloremque qui placeat galisum. Ut fuga itaque et deserunt dolor et reprehenderit illo eos mollitia odit rem debitis officia eum voluptas dolores!"
    }//,
    //{"imagenProyecto":"../../../assets/profile-pic.jpg",
    //"nombreProyecto":"Centro de quejas",
    //"fechaProyecto":"2019-05-01",
    //"descripcionProyecto":"Lorem ipsum dolor sit amet. Et commodi magni non dignissimos minima non atque doloremque qui placeat galisum. Ut fuga itaque et deserunt dolor et reprehenderit illo eos mollitia odit rem debitis officia eum voluptas dolores!"
  // }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
