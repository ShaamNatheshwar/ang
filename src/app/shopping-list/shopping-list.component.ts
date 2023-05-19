import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients : ingredient[];

  constructor(private slService: shoppingListService){}
  ngOnInit(): void {
      this.ingredients = this.slService.getIngredients();
      this.slService.ingredientsChanged.subscribe((ingredients : ingredient[])=>{this.ingredients = ingredients})
  }
  // onIngredientAdded(ingredient: ingredient){
  //   this.ingredients.push(ingredient)
  // }
}
