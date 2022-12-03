import { Component, OnInit } from '@angular/core';
import {product} from '../shared/model/product.model';
import {ProductRestService} from '../shared/services/product-rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  selectedProd: product;
  myProducts: product[] = [];
  appear = false;
  proddesc ="";

  constructor(private conex: ProductRestService) {
  }

  doeventalert(desc) {
    this.proddesc = desc;
    this.appear = true;
  }
  showProducts() {
    this.conex.getProducts().subscribe(
      (value: product[]) => {
        this.myProducts = value;
      }
    );
  }
  selectProd(prod: product) {
    this.appear = false;
    this.selectedProd = prod;
  }
  ngOnInit() {
    this.showProducts();
  }

}
