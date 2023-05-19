import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Biriyaani',
      'It looks and tastes greate',
      'https://images.unsplash.com/photo-1682685797818-c9dc151d241e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      [
        new ingredient('Meat', 1),
        new ingredient('tomato', 19),
      ]
    ),
  ];

  constructor(private slService: shoppingListService){}
  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients : ingredient[]){
    this.slService.addIngredientss(ingredients)
  }
}
