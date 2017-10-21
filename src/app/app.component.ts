import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Lesson 6 - Defining Stylesheets
  styleUrls: ['./app.component.css'],
  // Should you prefer to write inline CSS within the component decorator, you can change the styleUrls property to styles.
  styles: [`
    h1 {
      text-decoration: underline;
    }
    .red-title {
      color: red;
    }
    .green-title {
      color: green;
    }
  `]


})
export class AppComponent {
  // Lesson 6
  title = 'Hello!';
  titleClass = 'red-title';

  myEvent(event) {
    console.log(event);
  }

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him','hers','yours','theirs'];
}
