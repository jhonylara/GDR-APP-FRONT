import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogErroComponent } from './log-erro.component';

describe('LogErroComponent', () => {
  let component: LogErroComponent;
  let fixture: ComponentFixture<LogErroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogErroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
