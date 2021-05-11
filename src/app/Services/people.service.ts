import { Injectable } from '@angular/core';
import { People } from '../Models/people';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peoples } from '../Models/peoples';

// vi skal tænkne på HTTP Protokollen


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  // URL til vores API
  url : string = "https://swapi.dev/api/people";
  baseURL :string = "https://swapi.dev/api/";

  constructor(private http:HttpClient) { }

  // getPeoples():People[]{
  //   return [
  //     {name : 'Luke', height : 123, eye_color: 'blue' },
  //     {name : 'Darth Vader', height : 123, eye_color: 'yellow' },
  //     {name : 'Sorte Knud', height : 222, eye_color: 'secret' }
  //   ];
  // }

  getPeoples():Observable<Peoples>{
    return this.http.get<Peoples>(this.url); // .topromise kan vi lige prøve om lidt
  }
  // getPeoples():Observable<People[]>{
  //   return this.http.get<People[]>(this.url)
  // }


}
