import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { MenuItem } from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { MusicProductListComponent } from '../../feature/products/music-product-list/music-product-list.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, LoginRegisterComponent, TabMenuModule, ButtonModule, MusicProductListComponent
  , FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  ngOnInit() {
  }
}
