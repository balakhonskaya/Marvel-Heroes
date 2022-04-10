import { Component, OnInit } from '@angular/core';
import { Heroes } from './hero';
import { HeroesService } from './hero.service';
import { Results } from './hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers: [HeroesService],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Heroes;
  results: Results[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.heroes);
        console.log(this.results);
    
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => (this.heroes = heroes));
      
        
  }

}
