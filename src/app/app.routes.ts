import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MusicProductListComponent } from './feature/products/music-product-list/music-product-list.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'music', component: MusicProductListComponent},
];
