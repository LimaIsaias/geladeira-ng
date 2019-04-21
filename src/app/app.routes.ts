import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';

export const ROUTES: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'cadastro' , component: ContentComponent},
];
