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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BaseFormComponent } from './friend-form/base-form/base-form.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { FriendsComponent } from './friends.component';
import { FriendsService } from './services/friends.service';
import { FriendsEffects } from './state/friends.effect';
import { friendsReducer } from './state/friends.reducer';

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
    StoreModule.forFeature("friendsNetwork", friendsReducer),
    EffectsModule.forFeature([FriendsEffects])
  ],
  providers: [FriendsService],
  exports: [FriendsComponent],
})
export class FriendsModule {}
