import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from "@ngrx/store";
import { addQuestion } from "../../state/messages/messages.actions";
import {FormBuilder, FormGroup} from "@angular/forms";
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let store: Store;
  let formBuilder: FormBuilder;
  let formGroup: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [StoreModule.forRoot({}), ReactiveFormsModule],
      providers: [
        Store,
        FormBuilder
      ]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    formBuilder = TestBed.inject(FormBuilder);
    formGroup = formBuilder.group({
      message: ['']
    });
    component.form = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dispatches an addQuestion action', () => {
    spyOn(store, 'dispatch');
    formGroup.controls['message'].setValue('Hello');
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(addQuestion({ message: 'Hello' }));
  });
});
