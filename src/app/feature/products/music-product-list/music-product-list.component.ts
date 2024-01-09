import { Component, OnInit, SecurityContext } from '@angular/core';
import { MusicProductService } from '../../services/products/music-product.service';
import { HttpClient } from '@angular/common/http';
import { MusicProduct } from '../models/music-product';
import { NgFor } from '@angular/common'
import { ImageModule } from 'primeng/image';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-music-product-list',
  standalone: true,
  imports: [NgFor,ImageModule ],
  templateUrl: './music-product-list.component.html',
  styleUrl: './music-product-list.component.scss'
})
export class MusicProductListComponent implements OnInit {
  
  products: MusicProduct[] = [];

  constructor(private musicProductService: MusicProductService
    , private sanitizer: DomSanitizer){
  }
  ngOnInit() {
    this.getMusicProducts();
  }
  
  getMusicProducts(){
    this.musicProductService.GetMusicProducts()
    .subscribe(data => {
      this.products = data.result;
    });
  }

  sanitizeUrls(url: string){
    return this.sanitizer.sanitize(SecurityContext.URL, this.sanitizer.bypassSecurityTrustUrl(url)) ?? '';
  };

}
