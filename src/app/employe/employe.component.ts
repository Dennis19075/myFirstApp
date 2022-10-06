import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  name = 'Saito';
  lastname = 'Inosaka';
  age = 24;
  company = 'MongoDB'

  setCompany(event: Event){
    this.company = (<HTMLInputElement>event.target).value;
  }

  ableBox = false;

  registeredUser = false;

  RegisterText = "There is nobody registered.";

  getRegisteredUser(){
    this.registeredUser = false;
  }

  setRegisteredUser(event: Event){
    // alert('User signed up correctly!');
    // this.RegisterText = "User signed up correctly!"
    if ((<HTMLInputElement>event.target).value=="yes") {
      this.RegisterText = "User signed up correctly!"
    } else {
      this.RegisterText = "There is nobody registered."
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  getCompany(company: String) {
    
  }


}
