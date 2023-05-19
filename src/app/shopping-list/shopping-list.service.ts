import {EventEmitter} from '@angular/core'
import { ingredient } from "../shared/ingredient.model"
export class shoppingListService {
    ingredientsChanged = new EventEmitter<ingredient[]>()
    private ingredients : ingredient[] = [
        new ingredient('apple',10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
      addIngredients(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredientss(ingredients: ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
      }
}