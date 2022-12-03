import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {
   private baseurl = 'http://fenw.etsisi.upm.es:1194';
  //private baseurl = 'http://localhost';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get (this.baseurl + '/products');
  }
/*
  getProductsPromise() {
    const newPromise = new Promise(
      (resolve, reject) =>
          {
            resolve (this.http.get(this.baseurl + '/products').toPromise());
          }
      );
      return newPromise;
  }
*/
  getaProduct(myproduct: string) {
    return this.http.get (this.baseurl + '/products' + '/' + myproduct);
  }

  postProduct (newproduct, atoken: string) {
     const headers = new HttpHeaders().set("Content-Type", "application/json")
       .set("Authorithation", atoken) ;
     return this.http.post(this.baseurl + '/products', newproduct, {headers});
    /*   let params = new HttpParams();
         params = params.set ("newproduct", newproduct);
        return this.http.post(this.baseurl + '/products', {params: params}, {headers});
     */
  }

  deleteProduct (id:string) {
    return this.http.delete(this.baseurl + '/products/' + id);
  }
}
