import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { BaseFormComponent } from './base-form/base-form.component';
import { FriendsService } from './../services/friends.service';
import { FriendsNetworkState } from '../state/friends.reducer';
import { Store } from '@ngrx/store';
import { addFriend } from '../state/friends.action';

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

  constructor(
    private service: FriendsService,
    private store: Store<FriendsNetworkState>
  ) {}

  ngOnInit(): void {
    this.initializeUserFormGroup();
  }

  initializeUserFormGroup() {
    this.group = new FormGroup({
      users: new FormArray([
        BaseFormComponent.addForm(), // Main user
        BaseFormComponent.addForm(), // friend 1
        BaseFormComponent.addForm(), // friend 2
        BaseFormComponent.addForm(), // friend 3
      ]),
    });
  }

  public appendFriendForm(): void {
    this.userFormArray?.push(BaseFormComponent.addForm());
  }

  public removeFriendForm(formIndex: number) {
    this.userFormArray?.removeAt(formIndex);
  }

  onSubmit() {
    this.store.dispatch(addFriend({ friends: this.group.value.users }));
    this.group.reset();
    this.onAdd.emit();
  }
}
