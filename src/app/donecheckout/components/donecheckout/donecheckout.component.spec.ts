import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonecheckoutComponent } from './donecheckout.component';

describe('DonecheckoutComponent', () => {
  let component: DonecheckoutComponent;
  let fixture: ComponentFixture<DonecheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonecheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonecheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
