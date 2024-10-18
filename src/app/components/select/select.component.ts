import { Component, Input } from '@angular/core';
import { ISelectArrData } from '../../interfaces/selectArrData.interface';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() ariaLabel!: string;
  @Input() data!: ISelectArrData[];
  @Input() control!: FormGroup;
  @Input() controlName!: string;
  @Input() id!: string;
  @Input() label?: string;
  @Input() twClass?: string;
}
