import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicobservableComponent } from './basicobservable.component';

describe('BasicobservableComponent', () => {
  let component: BasicobservableComponent;
  let fixture: ComponentFixture<BasicobservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicobservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be', () => {
    expect(component.player1.ticket).toBeGreaterThanOrEqual(0);
    expect(component.player1.ticket).toBeLessThanOrEqual(component.higherNumber);
    expect(component.player2.ticket).toBeGreaterThanOrEqual(0);
    expect(component.player2.ticket).toBeLessThanOrEqual(component.higherNumber)
  });
});
