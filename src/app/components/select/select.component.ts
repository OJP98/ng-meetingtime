import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ISelectArrData } from '../../interfaces/selectArrData.interface';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() ariaLabel!: string;
  @Input() id!: string;
  @Input() label?: string;
  @Input() data!: ISelectArrData[];
  @Input() twClass?: string;
  private selectedValue!: string;

  @ViewChild('select') selectEl!: ElementRef;

  onSelected(): void {
    this.selectedValue = this.selectEl.nativeElement.value;
  }

  get selected(): string {
    return this.selectedValue;
  }
}
