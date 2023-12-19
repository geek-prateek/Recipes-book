import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{

  @ViewChild('nameInput') nameInputRef: ElementRef | null=null;
  @ViewChild('amountInput') amountInputRef: ElementRef | null = null;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  onAdd(){
    
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
 
  }
}
