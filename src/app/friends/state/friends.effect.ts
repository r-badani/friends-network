import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { FriendsService } from '../services/friends.service';
import * as FriendActions from './friends.action';

@Injectable()
export class FriendsEffects {
  constructor(
    private actions$: Actions,
    private friendDataService: FriendsService
  ) {}

  addFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof FriendActions.addFriend>>(
        FriendActions.addFriend.type
      ),
      mergeMap((action) =>
        this.friendDataService.addFriends(action.friends).pipe(
          map((network) => {
            return FriendActions.addFriendSuccess({ network });
          }),
          catchError((err: Error) => {
            return of(FriendActions.addFriendFailure({ error: err.message }));
          })
        )
      )
    )
  );

  loadFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof FriendActions.loadFriendNetwork>>(
        FriendActions.loadFriendNetwork.type
      ),
      mergeMap((action) =>
        this.friendDataService.loadSeedData().pipe(
          map((network) => {
            return FriendActions.loadFriendNetworkSuccess({ network });
          }),
          catchError((err: Error) => {
            return of(FriendActions.loadFriendNetworkFailure({ error: err.message }));
          })
        )
      )
    )
  );
}
