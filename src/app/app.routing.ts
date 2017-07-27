import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Componentes
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ProductListComponent} from './components/products-list/products-list.component';

const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductListComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
