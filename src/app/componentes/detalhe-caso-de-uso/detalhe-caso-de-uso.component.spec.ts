import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCasoDeUsoComponent } from './detalhe-caso-de-uso.component';

describe('DetalheCasoDeUsoComponent', () => {
  let component: DetalheCasoDeUsoComponent;
  let fixture: ComponentFixture<DetalheCasoDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCasoDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCasoDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
