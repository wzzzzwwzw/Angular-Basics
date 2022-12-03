import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-objectevent',
  templateUrl: './objectevent.component.html',
  styleUrls: ['./objectevent.component.css']
})
export class ObjecteventComponent implements OnInit {
  constructor( private toastr: ToastrService) { }
  ngOnInit() {
  }
  checktext(evt){
    if (evt.key < '0' || evt.key > '9') {
      this.toastr.error("Only numbers!!! (I told you :-))", "F.E.N.W.");
      evt.preventDefault();
    }
  }
}
