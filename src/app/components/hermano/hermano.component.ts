import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from 'src/app/service/servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {

  nombre:string = 'Rodrigo'

  constructor(private _servicioFamiliar :ServicioFamiliarService) { }

  saludar(): void {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '')
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarhijo())
  }


  ngOnInit(): void {

    this.nombre=this._servicioFamiliar.getHermanoGrande()

  
  }

}
