import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['', [Validators.required,Validators.minLength(3)]],
      LastName:['',[Validators.required,Validators.minLength(5)]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=.*[$@$!%*?&])(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,12}$/)]
        ],
      ConfirmPassword:['',Validators.minLength(12)]
      },
      //Custom Validators
      {
        validator:mustMatch('Password','ConfirmPassword')
      }
    )
  }
  signup(){
    console.log(this.signupForm.value.firstName);

  }

}
