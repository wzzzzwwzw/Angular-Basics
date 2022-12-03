import { Component, OnInit } from '@angular/core';
import {product} from '../shared/model/product.model';
import {ProductRestService} from '../shared/services/product-rest.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  //myProducts$: Observable<product[]> ;
  myProducts$: Observable<any> ;
  componentTitle ="Pipe Async";

  //constructor(private http: HttpClient) { }
  constructor(private prodService: ProductRestService) { }

  /*
  getProducts(){
    this.myProducts$ = this.http.get<product[]>('http://fenw.etsisi.upm.es:1194/products');
  }
*/
  getProducts(){
    this.myProducts$ = this.prodService.getProducts();
    return this.myProducts$;
  }
  ngOnInit() {
    this.getProducts();
  }

}
