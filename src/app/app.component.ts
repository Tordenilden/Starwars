// funktionalitet udefra - filer
import { Component } from '@angular/core';

// decorator - metadata om klassen
@Component({
  selector: 'app-root', // det HTML tag vi kan få fat i Component med
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars';
  // name: string = "Luke Skywalker";
  // //mail: string = undefined;
  // mail: string;
  // mail2:string = '';
}
