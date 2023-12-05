import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlgoPipe } from './algo.pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppChildComponent } from './components/app-child/app-child.component';
import { MyInterceptor } from './utils/my-interceptor.interceptor';
import { HermanoComponent } from './components/hermano/hermano.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgoPipe,
    AppChildComponent,
    HermanoComponent,
    ContactComponent,
    ProductsComponent,
    ProductsDetailComponent,
    HomeComponent,
    NavbarComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:MyInterceptor,
    multi: true,


  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
