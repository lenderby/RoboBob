import { createAction, props } from '@ngrx/store';

export const addMessage = createAction(
  '[Messages] Add Message',
  props<{ message: string }>()
);
export const addQuestion = createAction(
  '[Messages] Add Question',
  props<{ message: string }>()
);
export const addAnswer = createAction(
  '[Messages] Add Answer',
  props<{ message: string }>()
);
