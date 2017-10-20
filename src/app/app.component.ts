import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>
  <p>{{myObject.gender}}</p>
  <ul>
    <li *ngFor="let arr of myArr">{{arr}}</li>
  </ul>

  <div *ngIf="myArr; then tmpl1 else tmpl2">Yeah, I exist.</div>
  <ng-template #tmpl1>I'm here</ng-template>
  <ng-template #tmpl2>I'm note here</ng-template>

  `
})
export class AppComponent {

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him','hers','yours','theirs'];
}
