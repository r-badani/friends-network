import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { FriendsComponent } from './friends.component';
import { Network } from './models';
import {
  friendNetworkSelector,
  FriendsNetworkState,
} from './state/friends.reducer';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;
  let mockFriendsListSelector: MemoizedSelector<FriendsNetworkState, Network>;
  let mockStore: MockStore;
  const matDialog = {
    open: () => {},
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendsComponent],
      providers: [
        provideMockStore(),
        { provide: MatDialog, useValue: matDialog },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockFriendsListSelector = mockStore.overrideSelector(
      friendNetworkSelector,
      {
        users: [
          {
            name: 'john',
            age: 29,
            weight: 80,
          },
        ],
        links: [
          {
            source: 0,
            target: 1,
          },
        ],
      }
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
