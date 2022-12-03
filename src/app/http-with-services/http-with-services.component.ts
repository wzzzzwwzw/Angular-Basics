import { Component, OnInit } from '@angular/core';
import {product} from '../shared/model/product.model';
import {ProductRestService} from '../shared/services/product-rest.service';

@Component({
  selector: 'app-http-with-services',
  templateUrl: './http-with-services.component.html',
  styleUrls: ['./http-with-services.component.css']
})
export class HttpWithServicesComponent implements OnInit {
  myProducts: product[] = [];

  constructor(private conex: ProductRestService) { }

  getProducts(){
    this.conex.getProducts().subscribe(
      (value: product[]) => {this.myProducts = value;}
    );
  }
  /*
    getProducts(){
      this.conex.selectProductsPromise()
        .then ((value: product[]) => {this.myProducts = value;})
        .catch (error => {alert (error); });
    }
  */
  ngOnInit() {
    this.getProducts();
  }

}
