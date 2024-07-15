import { Component } from '@angular/core';
import { CalculateService } from './calculate.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultsComponent {
  constructor(private calculateService: CalculateService) {}

  get results() {
    return this.calculateService.results;
  }
}
