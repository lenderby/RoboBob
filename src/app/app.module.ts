import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { InputComponent } from './components/input/input.component';
import {StoreModule} from "@ngrx/store";
import { messagesReducer } from "./state/messages/messages.reducer";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ messages: messagesReducer }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
