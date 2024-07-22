import { Component } from '@angular/core';
import { DataModel } from '../interface/data-model';
import { CalculateService } from '../investment-results/calculate.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  constructor(private calculateService: CalculateService){}
  valuesInvestment?: DataModel;
  enteredInvestmentInitial: number = 0;
  enteredInvestmentAnnual: number = 0;
  enteredInvestmentReturnal: number = 5;
  enteredInvestmentDuration: number = 10;

  onSubmit() {
    this.valuesInvestment = {
      initialInvestment: this.enteredInvestmentInitial,
      annualInvestment: this.enteredInvestmentAnnual,
      duration: this.enteredInvestmentDuration,
      expectedReturn: this.enteredInvestmentReturnal,
    };
    this.calculateService.calculateInvestmentResults(this.valuesInvestment)
  }
}
