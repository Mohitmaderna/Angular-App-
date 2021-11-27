import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  lForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.lForm = new FormGroup({
      email: new FormControl('',{validators:[Validators.required,Validators.email]}),
      password: new FormControl('', {validators: [Validators.required,Validators.minLength(6)]})
    })
  }

  onSubmit(){
    console.log(this.lForm)
  }
}
