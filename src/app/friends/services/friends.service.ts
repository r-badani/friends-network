import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Network, User } from "../models";

@Injectable()
export class FriendsService {
  network: Network = {
    users: [
      { id: 0, name: "Michael Scott", age: 30, weight: 140 },
      { id: 1, name: "Dwight Schrute", age: 30, weight: 110 },
      { id: 2, name: "Jim Halpert", age: 20, weight: 140 },
      { id: 3, name: "Pam Beesly", age: 20, weight: 110 },
      { id: 4, name: "Ryan Howard", age: 22, weight: 110 },
      { id: 5, name: "Andy Bernard", age: 32, weight: 130 },
      { id: 6, name: "Jan Levinson", age: 32, weight: 110 },
      { id: 7, name: "Gabe Lewis", age: 23, weight: 108 },
      { id: 8, name: "Roy Anderson", age: 30, weight: 150 },
      { id: 9, name: "Stanley Hudson", age: 45, weight: 170 },
      { id: 10, name: "Kevin Malone", age: 42, weight: 200 },
      { id: 11, name: "Meredith Palmer", age: 42, weight: 110 },
      { id: 12, name: "Angela Martin", age: 30, weight: 110 },
      { id: 13, name: "Oscar Martinez", age: 32, weight: 120 },
      { id: 14, name: "Phyllis Vance", age: 40, weight: 160 },
  ],
    links: [
      { source: 0, target: 1 },
      { source: 0, target: 2 },
      { source: 0, target: 3 },
      { source: 0, target: 4 },
      { source: 0, target: 5 },
      { source: 0, target: 14 },
      { source: 6, target: 7 },
      { source: 6, target: 8 },
      { source: 6, target: 9 },
      { source: 6, target: 10 },
      { source: 11, target: 12 },
      { source: 12, target: 13 },
  ]
  };

  getNetwork(): Observable<Network> {
    return of(this.network);
  }

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
    this.network.users.push(newUser);

    return newUser.id;
  }

  private addConnection(source: number, target: number) {
    if (source == target) return; // source user Id and target user Id can not be same

    debugger;
    const connection = this.network.links.find(
      (element) => element.source == source && element.target == target
    );

    if (connection === undefined) {
      this.network.links.push({
        source,
        target
      });
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

    return of(this.network);
  }

  constructor() {}
}
