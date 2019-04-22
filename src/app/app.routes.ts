import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ProdutosComponent } from './produtos/produtos.component';

export const ROUTES: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'geladeira' , component: ProdutosComponent},
    {path: 'cadastro' , component: ContentComponent},
];
