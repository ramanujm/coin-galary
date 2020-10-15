import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinNavComponent } from './coin-nav.component';

describe('CoinNavComponent', () => {
  let component: CoinNavComponent;
  let fixture: ComponentFixture<CoinNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
