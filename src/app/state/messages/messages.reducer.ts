import { createReducer, on } from '@ngrx/store';
import { addMessage } from "./messages.actions";

export interface MessagesState {
  messages: string[];
  count: number;
}

export const initialState: MessagesState = {
  messages: [],
  count: 0
};

export const messagesReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => {
    return {
      ...state,
      messages: [...state.messages, message],
      count: state.count + 1
    };
  }),
  // on(updateCount, (state, { count }) => {
  //   return {
  //     ...state,
  //     count
  //   };
  // })
);
