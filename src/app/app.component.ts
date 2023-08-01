import { Component } from '@angular/core';
import { Stock } from './stock-interface/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  title = "proyecto1";

  stock: Stock[] = [
    {nombre: 'Leche', costo: '150' },
    {nombre: 'Huevos', costo: '200' },
    {nombre: 'Pan', costo: '130' },
    {nombre: 'Harina', costo: '250' },
    {nombre: 'Azucar', costo: '70' },
]
  listaStock = false

  mostrarLista () {
    this.listaStock = !this.listaStock
  }

}
  