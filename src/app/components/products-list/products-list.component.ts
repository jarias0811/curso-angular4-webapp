import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  providers: [ProductService]
})

export class ProductListComponent {
  public title: string;
  public products:Product[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.title = "Listado de productos";
  }

  ngOnInit() {
    console.log("productos-list component cargado");
    this._productService.getProducts().subscribe(
      result => {
        this.products = result;
      },
      error => {
        console.log(<any>error);
      });
  }
}
