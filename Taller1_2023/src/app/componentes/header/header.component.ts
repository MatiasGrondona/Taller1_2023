import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /*
  0 = No Logueado
  1 = Administrador Logeado
  2 = Cliente Logueado
  */
  userLogin=1;
}


