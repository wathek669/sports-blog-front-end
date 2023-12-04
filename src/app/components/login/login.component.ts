import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  title:string="Login";
  user:any={};

  constructor(private formBuilder:FormBuilder ) {}

  ngOnInit() {
    /* necessaire seulement si je veux utiliser des validateurs*/
    this.loginForm = this.formBuilder.group( {
      email:[''],
      password:['']
    })

    
  }

  login()
  {
    console.log('This is my user : ',this.user);
  }

}
