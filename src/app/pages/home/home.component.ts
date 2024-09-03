import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Observable } from 'rxjs';

var today = new Date();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  constructor(private contentfulService: ContentfulService){}

  blogPosts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();      
  }
 
  // date : any = today

  // console = console.log(today);


  todayDate: string = new Date().toDateString();
}