import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FriendFormComponent } from './friend-form/friend-form.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent {
  title = 'friends-network';

  constructor(public dialog: MatDialog) {}

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
}
