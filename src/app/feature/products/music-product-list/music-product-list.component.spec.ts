import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicProductListComponent } from './music-product-list.component';

describe('MusicProductListComponent', () => {
  let component: MusicProductListComponent;
  let fixture: ComponentFixture<MusicProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
