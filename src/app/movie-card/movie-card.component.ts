import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  //[id]="m.id" [title]="m.title" [cover]="m.large_cover_image" 

  @Input() id:any;
  @Input() title:any;
  @Input() cover:any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.cover);
    
  }

}
