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
  selector: 'vc-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true,
    },
  ],
})
export class DurationComponent implements OnInit, ControlValueAccessor, Validators {
  durationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.durationForm = this.formBuilder.group({
      duration: [0, [Validators.required]],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  registerOnTouched(): void {}

  get duration(): AbstractControl {
    return this.durationForm.controls.duration;
  }

  writeValue(value: any): void {
    if (value) {
      this.durationForm.setValue({ duration: value });
    }
  }

  registerOnChange(fn: any): void {
    this.durationForm.valueChanges.subscribe(fn);
  }

  public validate(): any {
    console.log(this.durationForm, this.durationForm.value.duration > 0)
    return this.durationForm.value.duration > 0 ? null : { duration: { valid: false } };
  }
}
