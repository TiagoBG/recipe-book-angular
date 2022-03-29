import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('A test recipe', 'Recipe desc', 'https://www.elmundoeats.com/wp-content/uploads/2020/12/FP-10-Minute-Eggless-Tiramisu-For-Two-2.jpg'),
    new Recipe('A test recipe', 'Recipe desc', 'https://www.elmundoeats.com/wp-content/uploads/2020/12/FP-10-Minute-Eggless-Tiramisu-For-Two-2.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
