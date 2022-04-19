import { Component, OnInit } from '@angular/core';
import { Personne } from './models/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  tab: Personne[] = [];
  count: number = 0;

  constructor() {}

  ngOnInit() {
    
  }

}
