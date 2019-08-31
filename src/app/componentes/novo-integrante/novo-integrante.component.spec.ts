import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoIntegranteComponent } from './novo-integrante.component';

describe('NovoIntegranteComponent', () => {
  let component: NovoIntegranteComponent;
  let fixture: ComponentFixture<NovoIntegranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoIntegranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
