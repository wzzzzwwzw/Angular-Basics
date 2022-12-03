import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  mymoney = 245.37;
  mynumber = 245.37;
  mymsseconds = Date.now();
  /*
  private mydate = new Date.now();
  mymsseconds = this.mydate.getTime();
  */
  myobject = {name: "Santiago", lastname: "Alonso", subject: "FENW"};
  mystring = "Cadena a convertir a minúsculas/MAYÚSCULAS";

  constructor(){
    //console.log (this.mymsseconds);
  }

  ngOnInit() {
  }

}
