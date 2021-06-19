import { Component, forwardRef, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'vc-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
})
export class DateComponent implements OnInit, ControlValueAccessor, Validators {
  dateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dateForm = this.formBuilder.group({
      date: [0, [Validators.required]],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  registerOnTouched(): void {}

  get date(): AbstractControl {
    return this.dateForm.controls.date;
  }

  writeValue(value: any): void {
    if (value) {
      this.dateForm.setValue({ date: value });
    }
  }

  registerOnChange(fn: any): void {
    this.dateForm.valueChanges.subscribe(fn);
  }

  public validate(): any {
    if (typeof this.dateForm.controls.date.value === 'string') {
      return Number.isNaN(new Date(this.dateForm.controls.date.value).getMilliseconds())
        ? { date: { valid: false } }
        : null;
    }
    return this.dateForm.controls.date.value instanceof Date ? null : { date: { valid: false } };
  }
}
