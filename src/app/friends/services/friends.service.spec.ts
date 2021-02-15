import { TestBed } from '@angular/core/testing';
import { User } from '../models';

import { FriendsService } from './friends.service';

describe('FriendsService', () => {
  let service: FriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsService],
    });
    service = TestBed.inject(FriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add user',  async() => {
    const fakeUsers: User[] = [
      { name: 'Michael Scott', age: 30, weight: 140 },
      { name: 'Dwight Schrute', age: 30, weight: 110 },
      { name: 'Jim Halpert', age: 20, weight: 140 },
    ];

      const network = await service
        .addFriends(fakeUsers)
        .toPromise();

      expect(network.users.length).toEqual(fakeUsers.length);
      expect(network.links.length).toEqual(fakeUsers.length - 1);
  });

  it('should not enter same user twice',  async() => {
    const fakeUsers: User[] = [
      { name: 'Michael Scott', age: 30, weight: 140 }, // user 1
      { name: 'Michael Scott', age: 30, weight: 140 }, // user 2
    ];

      const network = await service
        .addFriends(fakeUsers)
        .toPromise();

      expect(network.users.length).toEqual(1);
  });


});
