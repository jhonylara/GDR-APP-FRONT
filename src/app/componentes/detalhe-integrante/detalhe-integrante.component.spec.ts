import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheIntegranteComponent } from './detalhe-integrante.component';

describe('DetalheIntegranteComponent', () => {
  let component: DetalheIntegranteComponent;
  let fixture: ComponentFixture<DetalheIntegranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheIntegranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
