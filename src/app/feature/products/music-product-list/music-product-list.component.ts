import { Component, OnInit } from '@angular/core';
import { MusicProductService } from '../../services/products/music-product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-music-product-list',
  standalone: true,
  imports: [],
  templateUrl: './music-product-list.component.html',
  styleUrl: './music-product-list.component.scss'
})
export class MusicProductListComponent implements OnInit {

  constructor(private musicProductService: MusicProductService, private http: HttpClient){
  }

  ngOnInit() {
    console.log('ryan')
    this.musicProductService.GetMusicProducts()
    .subscribe(data => console.log(data));
  }
}
