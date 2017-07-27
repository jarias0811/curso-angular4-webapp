import {Component} from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'/home.component.html'
})

export class HomeComponent{
    public title:string;

    constructor(){
        this.title = "WebApp Productos Angular 4";
    }

    ngOnInit(){
        console.log("Se ha cargado componente home");
    }
}
