import { Injectable } from '@angular/core';
import { DataModel } from '../interface/data-model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  results?:{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];
  calculateInvestmentResults(data: DataModel) {
    // aqui está sendo aplicado o método de desestruturação de objetos do js
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;

    // outra maneira válida de ser feito
    // const initialInvestment = data.initialInvestment;
    // const annualInvestment = data.annualInvestment;
    // const duration = data.duration;
    // const expectedReturn = data.expectedReturn;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.results = annualData;
  }
}
