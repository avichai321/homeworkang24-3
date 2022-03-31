import { Component, OnInit, Optional } from '@angular/core';
import { ansOptions } from './ansOptions';
import { FormsModule ,NgForm , NgModel,ReactiveFormsModule} from '@angular/forms';

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
  points=ansOptions
  formHidden:boolean=false
  showResult:boolean = true
  
  answerResult(opa :ansOptions){ 
    switch(opa){
      case ansOptions.wrong:
        if ( this.total != 0){
          this.total += this.points.wrong;
          console.log(this.total)
        }
        break;
      case ansOptions.Correct:
      this.total += this.points.Correct;
      console.log(this.total)
      break;
    }
    
      
    
  }
   
  submitfor(form: any){
    this.formHidden=true;
    this.showResult=false;


  }
   }


