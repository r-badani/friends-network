import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent {
  @Input()
  public baseForm!: FormGroup;

  @Input()
  public formIndex!: number;

  @Output()
  public removeFormEvt: EventEmitter<number> = new EventEmitter<number>();

  static addForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      weight: new FormControl(''),
    });
  }

  public removeForm(formIndex: number): void {
    this.removeFormEvt.next(formIndex);
  }
  constructor() {}

}
