import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { BaseFormComponent } from './base-form/base-form.component';
import { FriendsService } from './../services/friends.service';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss'],
})
export class FriendFormComponent {
  public group: FormGroup = new FormGroup({});

  get userFormArray(): FormArray {
    return this.group?.get('users') as FormArray;
  }

  get userFormGroup(): FormGroup[] {
    return this.userFormArray?.controls as FormGroup[];
  }

  onAdd = new EventEmitter();

  constructor(private service: FriendsService) {}
  ngOnInit(): void {
    this.initializeUserFormGroup();
  }

  initializeUserFormGroup() {
    this.group = new FormGroup({
      users: new FormArray([
        BaseFormComponent.addForm(),
        BaseFormComponent.addForm(),
        BaseFormComponent.addForm(),
        BaseFormComponent.addForm(),
      ]),
    });
  }

  public appendForm(): void {
    this.userFormArray?.push(BaseFormComponent.addForm());
  }

  public removeForm(formIndex: number) {
    this.userFormArray?.removeAt(formIndex);
  }

  onSubmit() {
    //this.service.processInputData(this.group.value.users);
    this.onAdd.emit();
  }
}
