import { Component, Input } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { DateService } from '../../services/date.service';
import { ISelectArrData } from '../../interfaces/selectArrData.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  public dayFormControlName = 'day';
  public monthFormControlName = 'month';
  public yearFormControlName = 'year';

  @Input() control!: FormGroup;

  constructor(private dateSrvc: DateService) {}

  setToday(): void {
    this.control.setValue({
      day: this.dateSrvc.todayDay,
      month: this.dateSrvc.todayMonth,
      year: this.dateSrvc.todayYear,
    });
  }

  get daysSelectData(): ISelectArrData[] {
    return this.dateSrvc.daysInMonthArray().map((day) => ({
      key: day,
      value: day.toString(),
    }));
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
