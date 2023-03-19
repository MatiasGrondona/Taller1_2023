import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CardProductoComponent } from './componentes/card-producto/card-producto.component';
import { BodyProductoComponent } from './componentes/body-producto/body-producto.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AddProductoComponent } from './componentes/add-producto/add-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    CardProductoComponent,
    BodyProductoComponent,
    ContactoComponent,
    AddProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
