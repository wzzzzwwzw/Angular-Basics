import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  loginform = new FormGroup({
    username: new FormControl('myuserid',
      [Validators.required, Validators.minLength(2),
                    Validators.email]),
    password: new FormControl('',
      [Validators.required, Validators.minLength(4)])
  });

  sendit(data: FormGroup){
    if (data.get('username').hasError('required') ||
      data.get('password').hasError('required') )
      this.toastr.error ("Los dos campos son obligatorios", "F.E.N.W.")
  }

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

}
