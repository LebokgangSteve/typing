import { Component } from '@angular/core';
import { lorem } from 'faker';

//lorem.sentence();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    //if(value == this.randomText)
    this.enteredText = value;
  }
  compare(randomLetter: String, enteredLetter: String) {
    if (!enteredLetter) {
      return 'pending';
    }
    if (enteredLetter === randomLetter) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}
