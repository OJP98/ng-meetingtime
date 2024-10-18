import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public today: Date;
  public todayYear: number;
  public todayMonth: number;
  public todayDay: number;
  public months: string[];
  public years: number[];

  constructor() {
    this.today = new Date();
    this.todayYear = this.today.getFullYear();
    this.todayMonth = this.today.getMonth();
    this.todayDay = this.today.getDate();
    this.years = [this.todayYear - 1, this.todayYear, this.todayYear + 1];
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  daysInMonthArray = () => {
    return Array.from(
      { length: this.daysInMonth(this.todayMonth, this.todayYear) },
      (_, i) => i + 1
    );
  };
}
