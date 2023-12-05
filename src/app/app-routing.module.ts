import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',  redirectTo:'home', pathMatch: 'full'   },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productsId', component: ProductsDetailComponent },
  { path: 'contactos', component: ContactComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
