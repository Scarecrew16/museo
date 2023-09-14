import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

var today = new Date();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
  // date : any = today

  // console = console.log(today);


  todayDate: string = new Date().toDateString();
}