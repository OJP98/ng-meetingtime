import { Component, Input, OnInit } from '@angular/core';
import { SelectComponent } from '@components/select/select.component';
import { DateService } from '@services/date.service';
import { ISelectArrData } from '@interfaces/selectArrData.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent implements OnInit {
  public dayFormControlName = 'day';
  public monthFormControlName = 'month';
  public yearFormControlName = 'year';
  public daysSelectData: ISelectArrData[] = [];
  public dataChanged = false;

  @Input() control!: FormGroup;

  constructor(private dateSrvc: DateService) {}

  ngOnInit(): void {
    this.daysSelectData = this.getAvailableDays();
    this.control.statusChanges.subscribe(() => {
      this.daysSelectData = this.getAvailableDays();
      this.setDefaultIfNotFound();
    });
  }

  setToday(): void {
    this.control.setValue({
      day: this.dateSrvc.todayDay,
      month: this.dateSrvc.todayMonth,
      year: this.dateSrvc.todayYear,
    });
  }

  getAvailableDays(): ISelectArrData[] {
    const { month, year } = this.control.value;
    return this.dateSrvc.daysInMonthArray(month, year).map((day) => ({
      key: day,
      value: day.toString(),
    }));
  }

  setDefaultIfNotFound(): void {
    const { day, month, year } = this.control.value;
    const dayIndex = this.daysSelectData.findIndex((aDay) => aDay.key === day);
    if (dayIndex === -1)
      this.control.setValue({
        day: 1,
        month,
        year,
      });
  }

  get monthsSelectData(): ISelectArrData[] {
    return this.dateSrvc.months.map((month, index) => ({
      key: index,
      value: month,
    }));
  }

  get yearsSelectData(): ISelectArrData[] {
    return this.dateSrvc.years.map((year) => ({
      key: year,
      value: year.toString(),
    }));
  }
}
