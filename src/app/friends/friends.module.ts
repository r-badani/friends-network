import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import { FriendFormComponent } from './friend-form/friend-form.component';



@NgModule({
  declarations: [FriendsComponent, FriendFormComponent],
  imports: [
    CommonModule
  ],
  exports: [FriendsComponent],
})
export class FriendsModule { }
