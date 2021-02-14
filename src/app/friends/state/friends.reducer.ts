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
    users: [
      { id: 0, name: 'Michael Scott', age: 30, weight: 140 },
      { id: 1, name: 'Dwight Schrute', age: 30, weight: 110 },
      { id: 2, name: 'Jim Halpert', age: 20, weight: 140 },
      { id: 3, name: 'Pam Beesly', age: 20, weight: 110 },
      { id: 4, name: 'Ryan Howard', age: 22, weight: 110 },
      { id: 5, name: 'Andy Bernard', age: 32, weight: 130 },
      { id: 6, name: 'Jan Levinson', age: 32, weight: 110 },
      { id: 7, name: 'Gabe Lewis', age: 23, weight: 108 },
      { id: 8, name: 'Roy Anderson', age: 30, weight: 150 },
      { id: 9, name: 'Stanley Hudson', age: 45, weight: 170 },
      { id: 10, name: 'Kevin Malone', age: 42, weight: 200 },
      { id: 11, name: 'Meredith Palmer', age: 42, weight: 110 },
      { id: 12, name: 'Angela Martin', age: 30, weight: 110 },
      { id: 13, name: 'Oscar Martinez', age: 32, weight: 120 },
      { id: 14, name: 'Phyllis Vance', age: 40, weight: 160 },
    ],
    links: [
      { source: 0, target: 1},
      { source: 0, target: 2},
      { source: 0, target: 3},
      { source: 0, target: 4},
      { source: 0, target: 5},
      { source: 6, target: 7},
      { source: 6, target: 8},
      { source: 6, target: 9},
      { source: 6, target: 10},
      { source: 11, target: 12},
      { source: 12, target: 13},
      { source: 0, target: 14},
    ],
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
        network: payload.network,
      };
      return newState;
    }
  ),
  on(
    FriendActions.addFriendFailure,
    (state, payload): FriendsNetworkState => {
      return {
        ...state,
        error: payload.error,
      };
    }
  )
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
