import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeComponent } from './async-pipe.component';
import {ProductRestService} from '../shared/services/product-rest.service';
import {Observable} from 'rxjs';

describe(' Componente AsyncPipeComponent', () => {
  let component: AsyncPipeComponent;
  let fixture: ComponentFixture<AsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeComponent, ProductRestService, Observable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Should have as title Pipe Async', async(() =>{
      expect(component.componentTitle).toEqual("PipeAsync");
    }
  ) )
  /*
  it ('should have 5 products', async(() =>{
     expect(component.getProducts().to.have.lengthOf(2))
     }
  ) )
  */
});
