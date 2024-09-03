import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit{
  
  constructor(private contentfulService: ContentfulService){}

  blogPosts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();      
  }
}
