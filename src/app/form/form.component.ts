import { Component, OnInit } from '@angular/core';
import { sortans } from './sortans';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { 
  }
  
  
  
  ngOnInit(): void {
    
  }
  total:number=0;
  calcans=sortans;
  
  
  addcorrect(){
    this.total += this.calcans.Correct;
    console.log(this.total)
  }
  submitfor(opform:any){

  }

}
