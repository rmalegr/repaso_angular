import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande: string = ''
  hermanoPeque: string = ''

  saludar(hermano:string){
  console.log(`hola ${hermano}`)
  }
  preguntarhijo():string{
    return '¿Como está tu hijo ?'
  }
  setHermanoGrande(nombre:string){
    this.hermanoGrande = nombre
  }
  setHermanoPeque(nombre:string){
    this.hermanoPeque = nombre
  }
  getHermanoGrande():string{
    return this.hermanoGrande
  }
  getHermanoPeque():string{
    return this.hermanoPeque
  }
  

  constructor() { }
}
