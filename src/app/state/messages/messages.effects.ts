import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import {addAnswer, addQuestion} from './messages.actions';
import {answerGreeting, evaluateExpression} from "../../utils/message.util";

const messageUtils = [evaluateExpression, answerGreeting];

const findAnswer = (message: string) => {
  for (const method of messageUtils) {
    const result = method(message);
    if (result) {
      return result.toString();
    }
  }
  return "I'm sorry I don't understand";
}

@Injectable()
export class MessagesEffects {
  addMessage$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addQuestion),
        tap(() => console.log('Add message action received')),
        map(({message}) => {
          return addAnswer({ message: findAnswer(message) });
        })
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions) {}
}
