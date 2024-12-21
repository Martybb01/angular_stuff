import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  investmentReturn = '999';
  years = '5';

  onSubmit() {
    console.log('User input submitted');
    console.log('Initial investment: ' + this.initialInvestment);
    console.log('Annual investment: ' + this.annualInvestment);
    console.log('Investment return: ' + this.investmentReturn);
    console.log('Years: ' + this.years);
  }
}
