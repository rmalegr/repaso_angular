import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/productos.mode';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  producto?: Producto;
  productolist: Producto[] = [];
  loading: boolean = true
  color: string = ''

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) {
    this.productolist = JSON.parse(localStorage.getItem('productos') as string) as Producto[];
    // console.log(this.productolist)
    // console.log(this.producto)
    // console.log(this.producto?.price)
    // console.log(this.producto?.price as number > 5)
    // console.log(this.color)
    // console.log(this.loading)
    // console.log(this._route.snapshot.params['productsId'])
    // console.log(this._route.snapshot.params['productsId'] as number)
    // console.log(this._route.snapshot.params['productsId'] as number > 5)
    // console.log(this._route.snapshot.params['productsId'] as number > 5 ? 'red': '')
    // console.log(this._route.snapshot.params['productsId'] as number > 5 ? 'red': '')
    // console.log(this._route.snapshot.params['productsId'] as number > 5 ? 'red': '')
  }

  ngOnInit(): void {

    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProduct(Number(params['productsId'])).subscribe((data: Producto) => {
          this.producto = data
          this.productolist.push(data)
          localStorage.setItem('productos', JSON.stringify(this.productolist))
          this.color = this.producto?.price as number > 5 ? 'red' : ''
          this.loading = false;

        })

      }
    })


  }



}
