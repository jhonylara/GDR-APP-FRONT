import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesComponent } from './integrantes.component';

describe('IntegrantesComponent', () => {
  let component: IntegrantesComponent;
  let fixture: ComponentFixture<IntegrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
