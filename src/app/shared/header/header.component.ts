import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { MenuItem } from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, LoginRegisterComponent, TabMenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  ngOnInit() {
  }
}
