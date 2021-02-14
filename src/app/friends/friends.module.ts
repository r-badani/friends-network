import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FriendFormComponent } from './friend-form/friend-form.component';
import { FriendsComponent } from './friends.component';
import { BaseFormComponent } from './friend-form/base-form/base-form.component';
import { MatDialogModule } from "@angular/material/dialog";
import { FriendsService } from './services/friends.service';

@NgModule({
  declarations: [FriendsComponent, FriendFormComponent, BaseFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [FriendsService],
  exports: [FriendsComponent],
})
export class FriendsModule { }
