import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  showfirst = false;
  showsecond = true;
  teachers = ["Santiago", "Javier", "Luis"];
  number = 0;
  myamount = 10;
  constructor() { }

  ngOnInit() {
  }

}
