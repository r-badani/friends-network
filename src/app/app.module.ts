import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendsModule } from './friends/friends.module';
import { FriendsService } from './friends/services/friends.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FriendsModule
  ],
  providers: [
    FriendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
