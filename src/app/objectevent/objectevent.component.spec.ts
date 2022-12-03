import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjecteventComponent } from './objectevent.component';

describe('ObjecteventComponent', () => {
  let component: ObjecteventComponent;
  let fixture: ComponentFixture<ObjecteventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjecteventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjecteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
