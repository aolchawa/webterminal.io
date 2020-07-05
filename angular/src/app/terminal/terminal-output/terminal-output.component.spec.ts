import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalOutputComponent } from './terminal-output.component';

describe('TerminalOutputComponent', () => {
  let component: TerminalOutputComponent;
  let fixture: ComponentFixture<TerminalOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
