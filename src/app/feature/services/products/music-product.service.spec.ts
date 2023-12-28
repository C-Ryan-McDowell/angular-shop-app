import { TestBed } from '@angular/core/testing';

import { MusicProductService } from './music-product.service';

describe('MusicProductService', () => {
  let service: MusicProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
