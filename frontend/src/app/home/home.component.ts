import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personne } from '../models/personne';
import { personneService } from '../service/personne.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  tabPersonne: Personne[] = [];
  count: number = 0;
  subscriptionGET$: Subscription;

  constructor(private personneService:personneService) {}

  ngOnInit() {
    this.subscriptionGET$ = this.personneService.getUsers().subscribe({
      next: result => {
        console.log(result);
        this.tabPersonne = result;
        this.count = this.tabPersonne.length;
      },
      error: error => {
        console.warn(error.message);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionGET$.unsubscribe();
  }

}