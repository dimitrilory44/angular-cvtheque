import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { personneService } from '../service/personne.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() personnes: Personne[] = [];
  count: number = 0;

  constructor(private personneService:personneService) {}

  ngOnInit() {
    this.personneService.getUsers().subscribe({
      next: result => {
        console.log(result);
        this.personnes = result;
        this.count = this.personnes.length;
        console.log(this.count);
      },
      error: error => {
        console.log(error.message);
      }
    });
  }
}