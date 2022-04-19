import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { apiResponse } from '../_models/apiResponse';

@Injectable()
export class personneService {

	private url = 'http://localhost:8080';

    constructor(private http:HttpClient) {}

    getUsers() :Observable<any> {
		return this.http.get<apiResponse>(this.url + '/users').pipe(map(result => {
		  return result;
		}));
	}
    
}