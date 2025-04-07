import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personne } from '../../models/personne';
import { personneService } from '../../service/personne.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() personnes: Personne[] = [];
  // subscriptionDELETE$?: Subscription;
  // subscriptionUPDATE$: Subscription;
  
  constructor(private personneService:personneService) {}

  ngOnInit() {}

  // ngOnDestroy() {
  //   this.subscriptionDELETE$.unsubscribe();
  // }

  onDeleteElement(id: number) {
    this.personneService.deleteUsers(id).subscribe({
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
    // this.subscriptionUPDATE$ = this.personneService.updateUsers(id).subscribe({
    //   next: result => {
    //     console.log(result);
    //   },
    //   error: error => {
    //     console.warn(error.message);
    //   }
    // })
  }

}