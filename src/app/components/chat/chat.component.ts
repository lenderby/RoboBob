import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllMessages } from "../../state/messages/messages.selectors";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  public allMessages$ = this.store.select(selectAllMessages).pipe(tap(() => {
    setTimeout(function() {
      window.scrollTo(0, document.body.scrollHeight); // automatically scroll the chat
    });
  }));
  public welcomeMessage: string = `Hey, I'm RoboBob. You can ask me a question about myself, or I can do simple maths..`;

  constructor(private store: Store) {}



}
