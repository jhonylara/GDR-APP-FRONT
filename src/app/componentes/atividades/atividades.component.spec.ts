import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesComponent } from './atividades.component';

describe('AtividadesComponent', () => {
  let component: AtividadesComponent;
  let fixture: ComponentFixture<AtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
