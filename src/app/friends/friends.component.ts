import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FriendFormComponent } from './friend-form/friend-form.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  public group: FormGroup = new FormGroup({});

  get userFormArray(): FormArray {
    return this.group?.get('users') as FormArray;
  }

  get userFormGroup(): FormGroup[] {
    return this.userFormArray?.controls as FormGroup[];
  }

  constructor() {}
  ngOnInit(): void {
    this.initializeUserFormGroup();
  }

  initializeUserFormGroup() {
    this.group = new FormGroup({
      users: new FormArray([FriendFormComponent.addForm()]),
    });
  }

  onSubmit() {}
}
