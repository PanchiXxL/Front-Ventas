import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceProductsComponent } from './indice-products.component';

describe('IndiceProductsComponent', () => {
  let component: IndiceProductsComponent;
  let fixture: ComponentFixture<IndiceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndiceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
