import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FriendsComponent } from './friends/friends.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'friends-network';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FriendsComponent);
    dialogRef.updateSize("80%");

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      dialogRef.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
