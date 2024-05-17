import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animes: Array<Anime> = [];
  selected: boolean = false;
  selectedAnime!: Anime;

  constructor(private animeService:AnimeService) { }

  getAnime(): void {
    this.animeService.getAnime().subscribe({next: apiData => this.animes = apiData , error: e => console.error(e)});
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

  ngOnInit() {
    this.getAnime();
  }

}
