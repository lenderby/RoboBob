import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import {addAnswer, addQuestion} from './messages.actions';

const preDefinedMessages = [
  'Hello World!',
  'How are you today?',
  'Have a great day!'
];

@Injectable()
export class MessagesEffects {
  addMessage$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addQuestion),
        tap(() => console.log('Add message action received')),
        map(() => {
          const randomIndex = Math.floor(Math.random() * preDefinedMessages.length);
          return addAnswer({ message: preDefinedMessages[randomIndex] });
        })
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions) {}
}
