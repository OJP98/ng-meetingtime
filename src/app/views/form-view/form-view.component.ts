import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from '@services/date.service';
import { DatePickerComponent } from '@components/date-picker/date-picker.component';
import { LocationsContainerComponent } from '@components/locations-container/locations-container.component';
import { LocationPickerComponent } from '@components/location-picker/location-picker.component';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [
    DatePickerComponent,
    LocationsContainerComponent,
    LocationPickerComponent,
  ],
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.scss',
})
export class FormViewComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dateSrvc: DateService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      date: this.formBuilder.group({
        day: [this.dateSrvc.todayDay],
        month: [this.dateSrvc.todayMonth],
        year: [this.dateSrvc.todayYear],
      }),
    });
  }

  get dateControl(): FormGroup {
    return this.formGroup.controls['date'] as FormGroup;
  }
}
