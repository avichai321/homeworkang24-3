import { Component, OnInit, Optional } from '@angular/core';

import { FormsModule ,NgForm , NgModel,ReactiveFormsModule} from '@angular/forms';

export interface qa{

}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { 
  }
  formcal: any = {
    firstname:"",
  }
  total:number=0;
  formHidden:boolean=false
  showResult:boolean = true
  readonly quizResult_key = 'quiz result';
  
  

 
 
handlesave(){
  localStorage.setItem(this.quizResult_key,JSON.stringify(this.formcal))
}
 
  submitfor(form1: NgForm){
  this.formcal = form1
  for (let index = 1; index <=5; index++) {
   let qa= "opa" + index
   console.log(qa)
   if (this.formcal[qa] === "10"){
      this.total+= 10      
   }
   console.log(this.total)
   this.formHidden=true;
   this.showResult=false;
   
  }   
   }
   ngOnInit(): void {
    let savedResultsJson = localStorage.getItem(this.formcal);
    if(savedResultsJson != null){
      this.formcal = JSON.parse(savedResultsJson);
    
  } 
}
  }


