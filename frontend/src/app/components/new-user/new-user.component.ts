import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { personneService } from 'src/app/service/personne.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  personneForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required)
  });

  constructor(
    private routes: Router,
    private personneService: personneService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let user = new Personne();
    user.nom = this.personneForm.get('nom').value;
    user.prenom = this.personneForm.get('prenom').value;

    this.personneService.createUsers(user).subscribe({
      next: result => {
        alert(result);
        this.routes.navigate(['/']);
      },
      error: error => {
        console.warn(error.message);
      }
    })
  }

}
