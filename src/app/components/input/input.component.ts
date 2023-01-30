import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import {addQuestion} from "../../state/messages/messages.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  public form: FormGroup;

  constructor( private store: Store, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.store.dispatch(addQuestion(this.form.value));
      this.form.reset();
    }
  }

}
