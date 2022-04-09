import { Component, OnInit } from '@angular/core';
import { Heroes } from './hero';
import { HeroesService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers: [HeroesService],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Heroes[]=[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => (this.heroes = heroes));
  }

}
