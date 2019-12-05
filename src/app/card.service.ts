import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
   cardsUrl = 'assets/gifts.json';  // URL to web api


  constructor(private http: Http) { 
    
  }
   /** GET Cards from the server */
  getCards () {
    return this.http.get(this.cardsUrl)
      .pipe(
      map(res => res.json()  ) 
      );
  }
}
