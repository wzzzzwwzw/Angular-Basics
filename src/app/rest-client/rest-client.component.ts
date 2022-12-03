import { Component, OnInit } from '@angular/core';
import {product} from '../shared/model/product.model';
import {ProductRestService} from '../shared/services/product-rest.service';

@Component({
  selector: 'app-rest-client',
  templateUrl: './rest-client.component.html',
  styleUrls: ['./rest-client.component.css']
})
export class RestClientComponent implements OnInit {
  myProducts: product[] = [];
  oneProduct: product;
  newProduct = {id: '', desc : '', price: 0, stock: 0};
  aerror = false;
  found = false;
  searched = false;
  constructor(private conex: ProductRestService) { }

  showProduct(codprod: string) {
    this.searched = true;
    this.conex.getaProduct(codprod).subscribe(
      (oneprod: product) => {this.oneProduct = oneprod; this.found = true; },
      (error) => {this.found = false; }
    );
  }

  showProductList() {
    this.conex.getProducts().subscribe(
      (value: product[]) => {this.myProducts = value; }
    );
  }

  addProduct() {
    let mytoken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZ";
    this.conex.postProduct(this.newProduct, mytoken).subscribe(
      (res) => {console.log(res); },
      (error) => {this.aerror = true; }
    );
  }

  removeProduct(codprod: string) {
    this.conex.deleteProduct(codprod).subscribe(
      (res) => {console.log(res); },
      (error) => {this.aerror = true; }
    );
  }
  ngOnInit() {
    this.showProductList();
  }

}
