import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { BaseFormComponent } from './base-form.component';

describe('BaseFormComponent', () => {
  let component: BaseFormComponent;
  let fixture: ComponentFixture<BaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show name, age and weight input field', () => {
    const formIndex = 0;
    component.baseForm = new FormGroup({});
    component.formIndex = formIndex;

    fixture.detectChanges();
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

  it('should emit remove form event when the close icon is clicked', () => {
    const formIndex = 2;
    component.baseForm = new FormGroup({});
    component.formIndex = formIndex;
    spyOn(component.removeFormEvt, 'emit');
    fixture.detectChanges();

    fixture.detectChanges();
    const closeButton = fixture.nativeElement.querySelector(
      `.wrapper__head-closeBtn`
    );

    expect(closeButton).toBeTruthy();

    closeButton.click()
    fixture.detectChanges();

    expect(component.removeFormEvt.emit).toHaveBeenCalled()


  });
});
