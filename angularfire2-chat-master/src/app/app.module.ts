import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
   apiKey: "AIzaSyBmG7xYGxotG0BPpezI0zYu43FgGy6iSAg",
    authDomain: "mychatapp-a8884.firebaseapp.com",
    databaseURL: "https://mychatapp-a8884.firebaseio.com",
    storageBucket: "mychatapp-a8884.appspot.com",
    messagingSenderId: "903154988439"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
