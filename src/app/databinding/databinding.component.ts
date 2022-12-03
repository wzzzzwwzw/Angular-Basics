import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  productnumber = 10;
  mypid = 'pnumber1';
  isDisabled = true;
  myimgsrc = "../../assets/imgs/upmlogo.jpg";
  clientName ='Santiago';
  myamount = 5;

  showmyName(): string{
    let myName = "Santiago";
    return myName;
  }
  changeClientName(){
    this.clientName = 'Jorge';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
