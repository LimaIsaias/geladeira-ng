import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[];

  constructor() { }
  ngOnInit() {
  }

}
