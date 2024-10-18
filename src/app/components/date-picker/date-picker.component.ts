import { Component } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { DateService } from '../../services/date.service';
import { ISelectArrData } from '../../interfaces/selectArrData.interface';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  public days: number[];
  public months: string[];
  public todayDay: number;
  public todayMonth: number;
  public years: number[];
  public todayYear: number;

  constructor(private dateSrvc: DateService) {
    this.days = this.dateSrvc.daysInMonthArray();
    this.months = this.dateSrvc.months;
    this.todayDay = this.dateSrvc.todayDay;
    this.todayMonth = this.dateSrvc.todayMonth;
    this.years = this.dateSrvc.years;
    this.todayYear = this.dateSrvc.todayYear;
  }

  get daysSelectData(): ISelectArrData[] {
    return this.days.map((day) => ({
      key: day,
      value: day.toString(),
      selected: day === this.todayDay,
    }));
  }

  get monthsSelectData(): ISelectArrData[] {
    return this.months.map((month, index) => ({
      key: index,
      value: month,
      selected: index === this.todayMonth,
    }));
  }

  get yearsSelectData(): ISelectArrData[] {
    return this.years.map((year) => ({
      key: year,
      value: year.toString(),
      selected: year === this.todayYear,
    }));
  }
}
