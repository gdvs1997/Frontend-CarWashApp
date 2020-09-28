import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-carwash',
  templateUrl: './buscar-carwash.page.html',
  styleUrls: ['./buscar-carwash.page.scss'],
})
export class BuscarCarwashPage implements OnInit {

  empresas: any[] = [
    {
      nombre: 'Carwash La Union',
      direccion: 'Bo. Panchame, 13 calle, 2 ave.'
    },
    {
      nombre: 'Carwash Osman',
      direccion: 'Bo. Suyapa, 1 calle, 1 ave.'
    },
    {
      nombre: 'Carwash Monge',
      direccion: 'Bo. Panchame, calle principal.'
    }
  ];

  resultado: any[];

  buscar: string;

  constructor() { }

  ngOnInit() {
    this.resultado = this.empresas;
  }

  BuscarCarwash(){
    /*const found = this.resultado.find(element => {
      //debugger;
      if (element.nombre = this.buscar) {
        console.log(element);
      } else if (element.direccion = this.buscar) {
        console.log(element);
      }

    });*/

    //console.log(found);
    //console.log(this.buscar);
  }

}
