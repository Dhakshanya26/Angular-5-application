import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms';
import { CustomvalidationService } from './customvalidation.service';
@Component({
  selector: 'app-material',
  templateUrl: './angmaterial.component.html',
  styleUrls: ['./angmaterial.component.scss'],
  providers:[CustomvalidationService]
})
export class AngMaterialComponent implements OnInit {
  isChecked: boolean= false;
  countryList: string[];
  selectedTitle: any;
  titles: string[];
  
  isLoading: boolean=false;
  hide = true;

  myform = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, CustomvalidationService.checkLimit(7,16)]),
    
  });
registrationForm : FormGroup;
email = new FormControl('', [Validators.required, Validators.email]);
password = new FormControl('', [Validators.required, CustomvalidationService.checkLimit(7,16)]);

name: FormControl;
searches: string[] = [];
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }

    getPasswordErrorMessage(){
      return this.password.hasError('required') ? 'You must enter a value' : 
      this.password.hasError('range') ? 'Minimum 7 charcter and max 11 characters' :
          '';
    }
  constructor(fb: FormBuilder) {
 


  this.registrationForm = fb.group({
    "email" : this.email,
    "password": this.password,
  });
  this.registrationForm.valueChanges
  .subscribe( data => {
    if (this.registrationForm.valid) {
     // data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
      data.lastUpdateTS = new Date();
    }
  });
  this.registrationForm.valueChanges
  .filter(data => this.registrationForm.valid)
  .map(data => {
    //data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
    return data
  })
  .map(data => {
    data.lastUpdateTS = new Date();
    return data
  })
  .subscribe( data =>data);
   }
   //this.registrationForm.va
  ngOnInit() {
    this.name = new FormControl();
    this.name.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(term => {
      this.searches.push(term);
    });
    // this.registrationForm = new FormGroup({
    //   email: this.email,
    //   password: this.password
    // });
  this.titles = ['Mr.', 'Mrs.','Miss'];
    this.countryList = ['United Kingdom','France','USA','India']
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      alert("Form Submitted!");
      this.registrationForm.reset;
    }
    else{
      alert('This form has errors');
    }
  }
  saveDetails(){
         this.isLoading= true;
    if(!this.email.invalid && !this.password.invalid ){
      alert('This is a valid form');
     
    }
    else{
      alert('This form has errors');
    }
    this.isLoading= false;
  }
  onChange(event){
  }
}
