import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { DebugElement, Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-navbar',
  template: '<div></div>'
})
class NavbarStubComponent {}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarStubComponent
      ],
    }).compileComponents();
  }));
  it('deve ser criado', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
