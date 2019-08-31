import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCasoDeUsoComponent } from './novo-caso-de-uso.component';

describe('NovoCasoDeUsoComponent', () => {
  let component: NovoCasoDeUsoComponent;
  let fixture: ComponentFixture<NovoCasoDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCasoDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCasoDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
