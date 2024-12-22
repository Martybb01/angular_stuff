import { Injectable } from "@angular/core";
import type { InvestmentData } from "./shared/investment-data.model";

@Injectable({ providedIn: "root" })
export class InvestmentService {
  resultsData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] = [];
  calculateInvestmentResults(data: InvestmentData) {
    const { initialInvestment, annualInvestment, investmentReturn, years } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < years; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentReturn / 100);
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
    this.resultsData = annualData;
  }
}
