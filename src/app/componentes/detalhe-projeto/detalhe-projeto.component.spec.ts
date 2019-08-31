import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProjetoComponent } from './detalhe-projeto.component';

describe('DetalheProjetoComponent', () => {
  let component: DetalheProjetoComponent;
  let fixture: ComponentFixture<DetalheProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
