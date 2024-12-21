import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentData } from '../shared/investment-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentData>();
  initialInvestment = '0';
  annualInvestment = '0';
  investmentReturn = '999';
  years = '5';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      investmentReturn: +this.investmentReturn,
      years: +this.years
    });
  }
}
