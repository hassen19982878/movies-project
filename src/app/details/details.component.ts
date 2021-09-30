import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;
  movie = null;
  isLoading = true;

  constructor(private route:ActivatedRoute,private movies:MoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getMovieDetails();
  }


  getMovieDetails(){
    this.movies.getMovieById(this.id).subscribe((res:any)=>{
      console.log(res);
      this.movie = res.data.movie;
      this.isLoading = false;

      
    })
  }

}
