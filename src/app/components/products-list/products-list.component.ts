import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
    selector:'products-list',
    templateUrl:'./products-list.component.html'
})

export class ProductListComponent{
    public title:string;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = "Listado de productos";
    }

    ngOnInit(){
        console.log("productos-list component cargado");
    }
}
