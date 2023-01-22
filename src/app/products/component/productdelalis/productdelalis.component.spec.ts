import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdelalisComponent } from './productdelalis.component';

describe('ProductdelalisComponent', () => {
  let component: ProductdelalisComponent;
  let fixture: ComponentFixture<ProductdelalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdelalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdelalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
