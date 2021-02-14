import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { Network } from './models';
import {
  friendNetworkSelector,
  FriendsNetworkState,
} from './state/friends.reducer';
import { loadFriendNetwork } from './state/friends.action';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit, OnDestroy {
  close$ = new Subject();
  network!: Observable<Network>;
  title = 'friends-network';

  constructor(
    public dialog: MatDialog,
    private store: Store<FriendsNetworkState>
  ) {}


  openDialog() {
    const dialogRef = this.dialog.open(FriendFormComponent);
    dialogRef.updateSize('80%');

    dialogRef.componentInstance.onAdd
      .pipe(takeUntil(this.close$))
      .subscribe(() => {
        dialogRef.close();
      });
  }

  ngOnInit(): void {
    this.store.dispatch(loadFriendNetwork());
    this.network = this.store.select(friendNetworkSelector)
  }

  ngOnDestroy() {
    this.close$.next();
    this.close$.complete();
  }
}
