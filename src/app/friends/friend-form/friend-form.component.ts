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

  static addForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      weight: new FormControl(''),
    });
  }
  constructor() {}

}
