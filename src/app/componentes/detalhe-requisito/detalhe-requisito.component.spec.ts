import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRequisitoComponent } from './detalhe-requisito.component';

describe('DetalheRequisitoComponent', () => {
  let component: DetalheRequisitoComponent;
  let fixture: ComponentFixture<DetalheRequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
