import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 title = "passing data from child to parent";
 data = 10;
//send data from parent component
 UpdateChild(){
    this.data=(Math.floor(Math.random()*10));
 }
}
