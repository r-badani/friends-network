import { Network } from '../models';
import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as FriendActions from './friends.action';

export interface State {
  friendsNetwork: FriendsNetworkState;
}

export interface FriendsNetworkState {
  network: Network;
  error: string | null;
}

const initialState: FriendsNetworkState = {
  network: {
    users: [],
    links: [],
  },
  error: null,
};

export const friendsReducer = createReducer(
  initialState,
  on(
    FriendActions.addFriendSuccess,
    (state, payload): FriendsNetworkState => {
      const newState = {
        ...state,
        network: payload?.network,
      };
      return newState;
    }
  ),
  on(
    FriendActions.addFriendFailure,
    FriendActions.loadFriendNetworkFailure,
    (state, payload): FriendsNetworkState => {
      return {
        ...state,
        error: payload?.error,
      };
    }
  ),
  on(
    FriendActions.loadFriendNetworkSuccess,
    (state, payload): FriendsNetworkState => {
      const newState = {
        ...state,
        network: payload?.network,
      };
      return newState;
    }
  ),
);

const friendSelector = createFeatureSelector<FriendsNetworkState>(
  'friendsNetwork'
);

export const friendNetworkSelector = createSelector(
  friendSelector,
  (state) => state.network
);

export const friendNetworkError = createSelector(
  friendSelector,
  (state) => state.error
);
