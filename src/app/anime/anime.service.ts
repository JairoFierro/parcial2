import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

constructor(private http: HttpClient) { 
  
}

getAnime(): Observable<Anime[]> {
  const url = "https://gist.githubusercontent.com/VivianGomez/cc4116c67063bed35e9a39723e7a9d6a/raw/24ec60d9e5198a2fa76ad51c7ed577cfacf29f7f/anime.json";
  return this.http.get<Anime[]>(url);
}

}



