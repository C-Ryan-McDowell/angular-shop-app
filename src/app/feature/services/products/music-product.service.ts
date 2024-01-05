import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ApiHttpServiceService } from '../api-http-service.service';
import { Constants } from '../../../config/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicProductService {
  constructor(private constants: Constants, private apiHttpService: ApiHttpServiceService ) { 
  }

  public GetMusicProducts():Observable<any>{
    return this.apiHttpService.get(this.constants.SHOP_APP_BASE_URL + this.constants.MUSIC_PRODUCTS_CONTROLLER);
  }

}
