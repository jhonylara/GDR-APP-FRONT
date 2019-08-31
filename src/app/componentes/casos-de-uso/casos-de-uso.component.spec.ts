import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosDeUsoComponent } from './casos-de-uso.component';

describe('CasosDeUsoComponent', () => {
  let component: CasosDeUsoComponent;
  let fixture: ComponentFixture<CasosDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
