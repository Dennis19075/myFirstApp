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
  // company = 'Saito Inosaka Inc.'
  ableBox = true;

  registeredUser = false;

  getRegisteredUser(){
    this.registeredUser = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  getCompany(company: String) {
    
  }


}
