import { Component, OnInit, Input, Output, EventEmitter, inject } from '@angular/core';
import { ServicioFamiliarService } from 'src/app/service/servicio-familiar.service';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css'],
})
export class AppChildComponent implements OnInit {
  @Input() greeting: string = 'Hello World '; //default value
  @Input() nombreHijo: string = '';
  @Output() nombrePadre? = new EventEmitter();
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() messageFromChildnumero = new EventEmitter<number>();
  @Output() incrementarDedeHijo = new EventEmitter<void>();
  @Output() decrementarDedeHijo = new EventEmitter<void>();

  public mensaje: string = '';
  public contador: number = 0;

  constructor() {}
  private _servicioFamiliar2 = inject(ServicioFamiliarService)

  public nombreHermanoChico:string = 'Martin'

  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoPeque(this.nombreHermanoChico)
  }

  enviarNumero() {
    this.messageFromChildnumero.emit(this.contador * 3);
  }

  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  incrementar() {
    this.incrementarDedeHijo.emit();
  }

  decrementar() {
    console.log('decremento desde el hijo ');
    this.decrementarDedeHijo.emit();
  }
  
  saludar() {
    return `Hola me llamo ${this._servicioFamiliar2.getHermanoPeque()}`
  }
}
