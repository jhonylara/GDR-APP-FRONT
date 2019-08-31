import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoRequisitoComponent } from './novo-requisito.component';

describe('NovoRequisitoComponent', () => {
  let component: NovoRequisitoComponent;
  let fixture: ComponentFixture<NovoRequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoRequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
