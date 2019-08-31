import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAtividadeComponent } from './detalhe-atividade.component';

describe('DetalheAtividadeComponent', () => {
  let component: DetalheAtividadeComponent;
  let fixture: ComponentFixture<DetalheAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
