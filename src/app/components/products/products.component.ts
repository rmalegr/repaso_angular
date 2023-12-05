import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.mode';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProductos  : Producto[] = []

  constructor(private _apiService : ApiService) {
    console.log(this.listProductos, "me ejecuto primero ")
  }


  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe(data => {
      this.listProductos = data;
      console.log(data)
    
    })


  }



}
