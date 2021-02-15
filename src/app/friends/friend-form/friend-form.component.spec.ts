import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFormComponent } from './friend-form.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { addFriend } from '../state/friends.action';
import { FriendsNetworkState } from './../state/friends.reducer';

describe('FriendFormComponent', () => {
  let component: FriendFormComponent;
  let fixture: ComponentFixture<FriendFormComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendFormComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendFormComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show name, age and weight input field', () => {
    const formIndex = 0;

    fixture.detectChanges();
    console.log("🚀 ~ file: friend-form.component.spec.ts ~ line 50 ~ it ~ fixture.nativeElement", fixture.nativeElement)
    const nameField = fixture.nativeElement.querySelector(
      `input[name=name-${formIndex}]`
    );
    const ageField = fixture.nativeElement.querySelector(
      `input[name=age-${formIndex}]`
    );
    const weightField = fixture.nativeElement.querySelector(
      `input[name=weight-${formIndex}]`
    );

    expect(nameField).toBeTruthy();
    expect(ageField).toBeTruthy();
    expect(weightField).toBeTruthy();
  });

});
