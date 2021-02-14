import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NetworkChartModule } from '@components';
import { BaseFormComponent } from './friend-form/base-form/base-form.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { FriendsComponent } from './friends.component';
import { FriendsService } from './services/friends.service';

@NgModule({
  declarations: [FriendsComponent, FriendFormComponent, BaseFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    NetworkChartModule,
    ReactiveFormsModule,
  ],
  providers: [FriendsService],
  exports: [FriendsComponent],
})
export class FriendsModule {}
