import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {
  progresos:any[]=[
  {
    "nombreTec":"Html",
    "progresoTec":"80%"
  },
  {
    "nombreTec":"CSS",
    "progresoTec":"70%"
  },
  {
    "nombreTec":"JavaScript",
    "progresoTec":"60%"
  },
  {
    "nombreTec":"Angular",
    "progresoTec":"50%"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
