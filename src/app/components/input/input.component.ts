import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import {addMessage} from "../../state/messages/messages.actions";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public form: FormGroup;

  constructor( private store: Store, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      message: ['']
    });
  }

  ngOnInit() {
    this.store.dispatch(addMessage({message: 'something'}));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.store.dispatch(addMessage(this.form.value));
      this.form.reset();
    }
  }

}
