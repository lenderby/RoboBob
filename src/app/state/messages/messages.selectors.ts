import { createSelector, createFeatureSelector } from "@ngrx/store";
import { MessagesState } from "./messages.reducer";

export const selectMessagesState = createFeatureSelector<MessagesState>('messages');
export const selectAllMessages = createSelector(
  selectMessagesState,
  (state: MessagesState) => state.messages
);
