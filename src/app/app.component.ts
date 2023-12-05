import { Component, OnInit } from '@angular/core';
import { Post } from './interface';
import { PostsService } from './servicio/posts.service';
import { Observable, catchError, count, delay, fromEvent, scan } from 'rxjs';
import { ServicioFamiliarService } from './service/servicio-familiar.service';
//La principal funcion de un componente es la reutilización
@Component({
  // decorador transforma una clase en un componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public post$!: Observable<Post>;
  public hassError: boolean = false;
  public data!: string;
  public valorContador: number = 0
  public mensajePadre: string =
    'ojala Messi llegue al proximo mundial de Mexico EEUU 2026 ';
  public mensajeRecibido: string = '';
  nombre?:string
  //El pipe async se encarga de detecar cambios en la dayta
  constructor(private postsService: PostsService, private readonly service: PostsService,
    private _servicioFamiliar:ServicioFamiliarService,
  
    ) {
    this.post$ = this.postsService.getPosts().pipe(
      catchError((error) => {
        console.log(error);
        this.hassError = true;
        this.data = 'Error al cargar los datos';
        throw new Error(error);
      })
    );
  }

  

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan')
    this.nombre=this._servicioFamiliar.getHermanoGrande()

  }

  //consumimos el metodo de saludar del servicio familiar
  saludar(): void {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '')
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarhijo())
  }

  incrementar(): void {
    console.log(this.valorContador);
    this.valorContador++;
  }
  decrementar(): void {
    console.log(this.valorContador);
    this.valorContador--;
  }
  recibirMensaje($event: string) {
    console.log($event);
    this.mensajeRecibido = $event;
  }
}
