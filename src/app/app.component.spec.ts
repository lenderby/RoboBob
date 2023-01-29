import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ChatComponent} from "./components/chat/chat.component";
import {InputComponent} from "./components/input/input.component";
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, ChatComponent, InputComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
