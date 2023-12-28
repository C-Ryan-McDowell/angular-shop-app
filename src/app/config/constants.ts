import { Injectable } from '@angular/core'; 

@Injectable({
    providedIn: 'root'
  })

export class Constants {
    public readonly SHOP_APP_BASE_URL = "https://localhost:7228/";
    public readonly MUSIC_PRODUCTS_CONTROLLER = "api/MusicProducts";
}
