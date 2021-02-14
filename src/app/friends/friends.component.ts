import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { FriendsService } from './services/friends.service';

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

  onAdd = new EventEmitter();

  constructor(private service: FriendsService) {}
  ngOnInit(): void {
    this.initializeUserFormGroup();
  }

  initializeUserFormGroup() {
    this.group = new FormGroup({
      users: new FormArray([
        FriendFormComponent.addForm(),
        FriendFormComponent.addForm(),
        FriendFormComponent.addForm(),
        FriendFormComponent.addForm(),
      ]),
    });
  }

  public appendForm(): void {
    this.userFormArray?.push(FriendFormComponent.addForm());
  }

  public removeForm(formIndex: number) {
    this.userFormArray?.removeAt(formIndex);
  }

  onSubmit() {
    //this.service.processInputData(this.group.value.users);
    this.onAdd.emit();
  }
}
