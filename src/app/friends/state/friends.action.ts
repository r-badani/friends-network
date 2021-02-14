import { createAction, props } from "@ngrx/store";
import { User } from "../models";
import { Network } from "../models";

export const loadFriendNetwork = createAction(
  "[Friend-Network] load friend records"
);

export const loadFriendNetworkSuccess = createAction(
  "[Friend-Network] load friend records successful",
  props<{ network: Network }>()
);

export const loadFriendNetworkFailure = createAction(
  "[Friend-Network] load friend records unsuccessful",
  props<{ error: string }>()
);

export const addFriend = createAction(
  "[Add-friend] Add friend entry",
  props<{ friends: User[] }>()
);

export const addFriendSuccess = createAction(
  "[Add-friend] Adding friends successful",
  props<{ network: Network }>()
);

export const addFriendFailure = createAction(
  "[Add-friend] Adding friends unsuccessful",
  props<{ error: string }>()
);
