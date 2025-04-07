import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { apiResponse } from '../_models/apiResponse';
import { Personne } from '../models/personne';

@Injectable()
export class personneService {

	private url = 'http://localhost:8080';

    constructor(private http:HttpClient) {}

    getUsers() : Observable<any> {
		return this.http.get<apiResponse>(this.url + '/users').pipe(map((result:any) => {
		  return result;
		}));
	}

	createUsers(p: Personne) : Observable<any> {
		return this.http.post(this.url + '/users', p, {responseType: 'text'}).pipe(map(result => {
			return result;
		}));
	}

	updateUsers(personId: number, p: Personne) : Observable<any> {
		const postData = new FormData();
		postData.append('p', JSON.stringify(p));
		return this.http.put<apiResponse>(this.url + '/users/' + `${personId}`, p).pipe(map((result:any) => {
			return result;
		}))	
	}

	deleteUsers(idPerson: number) : Observable<any> {
		return this.http.delete(this.url + '/users/' + `${idPerson}`, {responseType: 'text'}).pipe(map(result => {
			return result;
		}));
	} 
    
}