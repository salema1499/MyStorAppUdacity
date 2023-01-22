import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaloneComponent } from './productalone.component';

describe('ProductaloneComponent', () => {
  let component: ProductaloneComponent;
  let fixture: ComponentFixture<ProductaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
