import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoCardComponent } from './requisito-card.component';

describe('RequisitoCardComponent', () => {
  let component: RequisitoCardComponent;
  let fixture: ComponentFixture<RequisitoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
