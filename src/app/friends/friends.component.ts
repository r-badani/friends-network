import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { Network } from './models';
import { friendNetworkSelector, FriendsNetworkState } from './state/friends.reducer';
import { loadFriendNetwork } from './state/friends.action';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  network!: Observable<Network>;
  title = 'friends-network';

  constructor(public dialog: MatDialog, private store: Store<FriendsNetworkState>) {}

  openDialog() {
    const dialogRef = this.dialog.open(FriendFormComponent);
    dialogRef.updateSize("80%");

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      dialogRef.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadFriendNetwork())
    this.network = this.store.select(friendNetworkSelector).pipe(
      map(
        r => {
          return {...r}
        }
      )
    )
  }
}
