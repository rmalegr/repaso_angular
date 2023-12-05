import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.mode';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product?:Producto
  productlist:Producto[] = []
  constructor(private _apiService:ApiService) {
    this.productlist = JSON.parse(localStorage.getItem('productos') as string) as Producto[];
    console.log(this.productlist)


   }

  ngOnInit(): void {
  }

}
