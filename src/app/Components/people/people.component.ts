import { Component, OnInit } from '@angular/core';
import { create } from 'domain';
import { People } from 'src/app/Models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
 // properties
 name : string = "Luke Skywalker";
 height: number =172;
 eye_color: string = "Blue";
 people : People = new People(); // HUSk at give dem et objekt!!
 // DI
  constructor() { }

  // startop metode det er her ting init...Hente fra API første gang
  ngOnInit(): void {
    // Invoke a function
    this.firstFunction();
    this.firstFunction();

    let temp2 : string  = this.createFunction(); // Henrik du har ret!!
    console.log(temp2);
    let temp : string = "flemming";
    console.log(temp);

    // objekter mm - Hvad betyder det at den er undefined??
    this.people.name = "skywalker";
    this.people.height=111;
    this.people.eye_color="blue";

    // data til objekt fra <input> 1 time
  }

  //firstFunction:void
  firstFunction():void {
    console.log('vi tester en function');
  }
  //createFunction:string
  createFunction():string{
    return "returnValue";
  }

  //createFuntion:People - POST
  createPeople():void{
    // skal den virkelig returnere noget??
    // hvad skal der ske herinde?
    // kalde vores API og gøre noget
    //kalder en metode og parser vores objekt med, dvs vores api
   // create(this.people);
  }






  // functions
  // lad os lige lege med 2 funtions og se hvad de kan evt. flere
  // interfaces / class  - Models
  // prøve at oprette et array af de Models
  // hente data fra API , services, DI
  // @Input og @Output, property, propertybinding, 2 way osv.


}
