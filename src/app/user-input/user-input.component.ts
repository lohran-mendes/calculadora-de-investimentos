import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  enteredInvestmentInitial: number = 0;
  enteredInvestmentAnnual: number = 0;
  enteredInvestmentReturnal: number = 0;
  enteredInvestmentDuration: number = 0;

onSubmit(){
  console.log('funcionou, foi submetido')
  console.log(this.enteredInvestmentInitial)
  console.log(typeof this.enteredInvestmentInitial)
}
}
