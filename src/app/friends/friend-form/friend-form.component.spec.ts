import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFormComponent } from './friend-form.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { addFriend } from '../state/friends.action';
import { FriendsNetworkState } from './../state/friends.reducer';
import { FormGroup } from '@angular/forms';

describe('FriendFormComponent', () => {
  let component: FriendFormComponent;
  let fixture: ComponentFixture<FriendFormComponent>;
  let mockStore: MockStore;
  const matDialog =

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

  it('should add new friend form when Add one more friend button ', () => {
    const currentFormCount = component.userFormGroup.length;

    const addMoreFormBtn = fixture.nativeElement.querySelector(
      'button[name=addform]'
    );
    addMoreFormBtn.click();

    fixture.detectChanges();
    const newCount = component.userFormGroup.length;

    expect(currentFormCount).toBeLessThan(newCount);
  });

  it('should add new friend form when Add one more friend button ', () => {
    const currentFormCount = component.userFormGroup.length;
    component.removeFriendForm(3);

    fixture.detectChanges();
    const newCount = component.userFormGroup.length;

    expect(currentFormCount).toBeGreaterThan(newCount);
  });

  it('submit button is disabled if form is invalid', () => {
    component.group.markAsTouched();
    fixture.detectChanges();

    const submitEl = fixture.nativeElement.querySelector('button[type=submit]');
    expect(submitEl).toBeTruthy();

    expect(submitEl.disabled).toBeTruthy();
  });

  it('should dispatch addFriend action on submit click', () => {
    spyOn(mockStore, 'dispatch');

    component.onSubmit()
    fixture.detectChanges()

    // TODO test for complete action with prop object
    expect(mockStore.dispatch).toHaveBeenCalled();

  })
});
