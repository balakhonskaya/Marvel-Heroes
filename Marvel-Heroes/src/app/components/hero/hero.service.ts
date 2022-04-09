import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroes } from './hero';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  
  @Injectable()
  export class HeroesService {
    jobsUrl = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a457384f14a6e4be0d167ada2feadf33&hash=b23f32a05a5917dc706e598ddc0e9886';  // URL to web api
    //private handleError: HandleError;
  
    constructor(
      public http: HttpClient) {
    }
  
    /** GET jobs from the server */
    getHeroes(): Observable<Heroes[]> {
      return this.http.get<Heroes[]>(this.jobsUrl)
        .pipe();
    }
  }