import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent {
  @Input()
  public baseForm!: FormGroup;

  @Input()
  public formIndex!: number;

  @Output()
  public removeFormEvt: EventEmitter<number> = new EventEmitter<number>();

  get nameField(): FormControl{
    return this.baseForm?.controls['name'] as FormControl;
  }

  get weightField(): FormControl{
    return this.baseForm?.controls['weight'] as FormControl;
  }

  static addForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      age: new FormControl('', {
        validators: [Validators.required],
      }),
      weight: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  public removeForm(formIndex: number): void {
    this.removeFormEvt.next(formIndex);
  }
  constructor() {}
}
