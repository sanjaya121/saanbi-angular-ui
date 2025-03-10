import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../home/services/movies/movies.service';
import { Movies } from '../../../models/movies.model';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent  implements OnInit{

  constructor(private moviesService : MoviesService){

  }
  ngOnInit(): void {
      this.loadMovies();
  
  }
  movieList:any;
  movieData:any;
  loadMovies=()=>{
    this.moviesService.getMovies().subscribe((movies)=>{
      console.log("movies ",movies,typeof movies)
      this.movieList = movies;
      this.movieData = this.movieList.data;
    
      console.log("movie data",this.movieData)
    })
  }

}
