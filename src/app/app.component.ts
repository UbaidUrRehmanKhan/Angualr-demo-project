import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: '', // need to put your API key over here
      authDomain: 'https://angular-receipe-app.firebaseio.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
