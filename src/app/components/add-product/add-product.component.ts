import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  providers:[ProductService]
})

export class AddProductComponent{
  public title:string;
  public product:Product;

  constructor(){
    this.title = 'Crear un nuevo producto';
    this.product = new Product(0,'','',0,'');
  }

  ngOnInit(){
    console.log('Producto add component cargado');
  }

  onSubmit(){
    
  }
}
