import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTokenBalanceComponent } from './address-token-balance.component';

describe('AddressTokenBalanceComponent', () => {
  let component: AddressTokenBalanceComponent;
  let fixture: ComponentFixture<AddressTokenBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressTokenBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressTokenBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
