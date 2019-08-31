import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegranteCardComponent } from './integrante-card.component';

describe('IntegranteCardComponent', () => {
  let component: IntegranteCardComponent;
  let fixture: ComponentFixture<IntegranteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegranteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegranteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
