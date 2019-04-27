import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import * as moment from 'moment';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
})
export class ProdutosComponent implements OnInit {
   compra: Date =  new Date(2019, 4, 26) ;
   validade: Date  =  new Date(2019, 8, 26) ;
  produtos: Produto[] = [
    { id: '1',
      descricao: 'Leite',
      preco: 10.99,
      dataCompra : this.compra,
      categoria : 'Laticínios',
      validade: this.validade,
      imagePath: 'assets/img/restaurants/tasty.png'
    },
    { id: '2',
      descricao: 'Pão de Forma',
      preco: 4.99,
      dataCompra : this.compra,
      categoria : 'Pães',
      validade: this.validade,
      imagePath: 'assets/img/restaurants/breadbakery.png'
    }];

  constructor() { }
  ngOnInit() {
  }

}
