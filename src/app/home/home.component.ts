import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesList= [];
  searchForm = new FormGroup({
    q : new FormControl('')
  })
  constructor(private movies:MoviesService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(){
    this.movies.getMovies().subscribe((data:any)=>{
      console.log(data);
      this.moviesList = data.data.movies;
      
    })
  }


  searchFor(){
    const q = this.searchForm.value.q;
    this.movies.searchByQuery(q).subscribe((data:any)=>{
      console.log(data);
      //this.moviesList = data.data.movies;

      if (data.data.movie_count != 0) {
        this.moviesList = data.data.movies;
      }
      
    })
  }

}
