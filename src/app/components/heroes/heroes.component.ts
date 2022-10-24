import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/models/hero.interface';
import { HEROES_LIST } from 'src/app/mocks/heroes.mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES_LIST;

  selectedHero?: IHero;

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

}
