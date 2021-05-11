import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { People } from 'src/app/Models/people';
import { PeopleService } from 'src/app/Services/people.service';

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
 peopleArray : People [];
 peopleListFromService : People[];

 array : People[]=[]; // I kan få en fejl hvis arrayet ikke har en værdi - outofbounds, index...
/*
vi vil gerne oprette et array af typen People
med 3 people inde i det
På den måde simulerer vi et API

ForLoop =>

Hente API service

*/
/*
Forms Module
Hvad gør jeg??
1) import i app.module.ts
2) bygge et object op inde i.ts filen (en class der hedder FormGroup og de enkelte lines hedder FormControl)
3) <form> <input></form>
4) metode CreatePeople eller lignende, hvor vi trækker data ud fra formen
*/
peopleForm = new FormGroup(
  {
    name:new FormControl(''),
    height:new FormControl(''),
    eye_color:new FormControl('')
  } // en metode som kan validerer den enkelte property
)

 //people1Service : PeopleService


 // DI
  constructor(private peopleService: PeopleService) { }

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

    this.peopleArray = [
      {name : 'Luke', height : 123, eye_color: 'blue' },
      {name : 'Darth Vader', height : 123, eye_color: 'yellow' },
      {name : 'Sorte Knud', height : 222, eye_color: 'secret' }
    ]
   //version 1
    // this.peopleListFromService = this.peopleService.getPeoples();
    // console.log(this.peopleListFromService);
    // version 2
    //this.peopleListFromService = this.peopleService.getPeoples();
    //omg!! har en forventning om det kører synchronous
    // async istedetfor med et promise eller lignende
    this.peopleService.getPeoples().subscribe(
      dataFromAPI => {
        // console.log(dataFromAPI); //typecast?
        this.peopleListFromService = dataFromAPI.results;
        console.log(this.peopleListFromService);
        // console.log(this.peopleListFromService[0].count);
       // console.log(this.peopleListFromService[0].homeworld);

      }); // kan sætte noget mere fra en service


      // her skal der være en ifsætning
      // console.log(this.peopleListFromService[0].name);

    // console.log(this.peopleService);

    //

  }

  //firstFunction:void
  firstFunction():void {
    console.log('vi tester en function');
  }
  //createFunction:string
  createFunction():string{
    return "returnValue";
  }

  //formvalue = this.peopleForm.value; // oMG flemse!! kan ikke det her før min form har et navn / id så glem det lige nu
  //createFuntion:People - POST
  createPeople():void{
    // OMG formvalue = this.form.value;
    // log(formvalue.property)
    //console.log(this.movieForm.controls['titel'].value);
    //console.log(this.movieForm.get('firstname').value);
   console.log("testing form module");
  //  console.log(this.peopleForm.controls['name'].value);
  //  console.log(this.peopleForm.controls['height'].value);
   console.log(this.peopleForm.controls['eye_color'].value);
   const formvalue = this.peopleForm.value;
   console.log(formvalue.name);


  }

  //post til api
  //select lidt mærkelig

  // getDataFromService(){

  // }




  // functions
  // lad os lige lege med 2 funtions og se hvad de kan evt. flere
  // interfaces / class  - Models
  // prøve at oprette et array af de Models
  // hente data fra API , services, DI
  // @Input og @Output, property, propertybinding, 2 way osv.


}
