import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {product} from '../../shared/model/product.model';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {
  @Input() prod: product;
  @Output() myEvent = new EventEmitter();
  constructor() { }
  sendEvent(data: string){
    this.myEvent.emit(data);
  }
  ngOnInit() {
  }

}
