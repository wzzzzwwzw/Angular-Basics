import { Component, OnInit } from '@angular/core';
import {product} from '../shared/model/product.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  myProducts: product[] = [];
  private baseurl = 'http://fenw.etsisi.upm.es:1723';

  constructor(private http: HttpClient) { }

  public selectProducts() {
    return this.http.get(this.baseurl + '/products');
  }

  public findaProduct(myproduct: string){
    return this.http.get(this.baseurl + '/products' + '/' + myproduct);
  }

  ngOnInit() {
    this.selectProducts().subscribe(
      (value: product[]) => {this.myProducts = value; },
      (error) => {console.log (error);}
    );
  }
}
