import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Link, Network, User } from "../models";
import { FriendsNetworkMockData } from "@data-mocks";

@Injectable()
export class FriendsService {
  network: Network = {
    users: [],
    links: []
  };

  private isExistingUser(user: User) {
    // user found if all the attributes i.e., name, age and weight match
    const member = this.network.users.find(
      (existingUser: User) =>
        existingUser.name.toLowerCase() === user.name.toLowerCase() &&
        existingUser.age === user.age &&
        existingUser.weight === user.weight
    );

    if (member !== undefined) {
      return member.id;
    }
    return -1;
  }

  /**
   * @desc adds a user in the members list
   * @param User personal data of a given user
   * @return int - user id of the user
   */
  private addIndividualUser(user: User) {
    const userIds = [];

    const newUser: User = {
      ...user,
      id: this.network.users.length,
    };
    this.network.users = [...this.network.users, newUser];

    return newUser.id;
  }

  private addConnection(source: number, target: number) {
    if (source == target) return; // source user Id and target user Id can not be same

    debugger;
    const connection = this.network.links.find(
      (element) => element.source == source && element.target == target
    );

    if (connection === undefined) {
      const link: Link = {
        source,
        target,
      };

      this.network.links = [...this.network.links, link];
    }
  }

  processInputData(formData: User[]) {
    const user = formData.slice(0, 1);
    const friends = formData.slice(1);
    let source: number;

   // check if a user already exists, if not then add in the list of members
    source = this.isExistingUser(user[0]);
    if (source === -1) {
      source = this.addIndividualUser(user[0]);
    }

    //iterate over friends data
    friends.forEach((item) => {
      let target = this.isExistingUser(item);
      //check if a friend already exists, if not then add in the list of members
      if (target === -1) {
        target = this.addIndividualUser(item);
      }
      //add connection
      this.addConnection(source, target);
    });

    return of({...this.network});
  }

  loadSeedData(): Observable<Network> {
    this.network = {...FriendsNetworkMockData};
    return of({
      ...this.network
    });
  }

  constructor() {}
}
