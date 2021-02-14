import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendsModule } from './friends/friends.module';
import { FriendsService } from './friends/services/friends.service';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NetworkChartModule } from './network-chart/network-chart.module';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FriendsModule,
    NetworkChartModule,
    MatDialogModule,
  ],
  providers: [
    FriendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
