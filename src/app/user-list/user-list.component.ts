import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personne } from '../models/personne';
import { personneService } from '../service/personne.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  @Input() personnes: Personne[] = [];
  @Output() 
  count: number = 0;
  subscriptionGET$ ?:Subscription;
  subscriptionUPDATE$ ?:Subscription;
  subscriptionDELETE$ ?:Subscription;

  constructor(private personneService:personneService) {}

  ngOnInit() {
    this.subscriptionGET$ = this.personneService.getUsers().subscribe({
      next: result => {
        console.log(result);
        this.personnes = result;
        this.count = this.personnes.length;
        console.log(this.count);
      },
      error: error => {
        console.warn(error.message);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionGET$.unsubscribe();
    this.subscriptionDELETE$.unsubscribe()
  }

  onDeleteElement(id: number) {
    this.subscriptionGET$ = this.personneService.deleteUsers(id).subscribe({
      next: result => {
        console.log(result);
        location.reload();
      },
      error: error => {
        console.warn(error.message);
      }
    });
  }

  onUpdateElement(id: number) {
    this.subscriptionUPDATE$ = this.personneService.updateUsers(id, p).subscribe({
      next: result => {
        console.log(result);
      },
      error: error => {
        console.warn(error.message);
      }
    })
  }

}