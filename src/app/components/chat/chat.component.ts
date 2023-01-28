import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllMessages } from "../../state/messages/messages.selectors";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  public allMessages$ = this.store.select(selectAllMessages);

  constructor(private store: Store) {}



}
