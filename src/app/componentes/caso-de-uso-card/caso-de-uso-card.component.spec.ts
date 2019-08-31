import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoDeUsoCardComponent } from './caso-de-uso-card.component';

describe('CasoDeUsoCardComponent', () => {
  let component: CasoDeUsoCardComponent;
  let fixture: ComponentFixture<CasoDeUsoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasoDeUsoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasoDeUsoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
