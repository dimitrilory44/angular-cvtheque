import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from './models/personne';
import { personneService } from './service/personne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  tabPersonne: Personne[] = [];

  personneForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required)
  });

  constructor(private personneService: personneService) {}

  ngOnInit() {}

  onSubmit() {
    let user = new Personne();
    user.nom = this.personneForm.get('nom').value;
    user.prenom = this.personneForm.get('prenom').value;

    this.personneService.createUsers(user).subscribe({
      next: result => {
        alert(result);
        location.reload();
      },
      error: error => {
        console.warn(error.message);
      }
    })
  }

}
