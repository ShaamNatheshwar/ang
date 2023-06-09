import { Component, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<ingredient>();
  constructor(private slService: shoppingListService){}
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingName, ingAmount)
    // this.ingredientAdded.emit(newIngredient)
    this.slService.addIngredients(newIngredient);
  }
}
