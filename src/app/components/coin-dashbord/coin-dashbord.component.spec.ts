import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDashbordComponent } from './coin-dashbord.component';

describe('CoinDashbordComponent', () => {
  let component: CoinDashbordComponent;
  let fixture: ComponentFixture<CoinDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
