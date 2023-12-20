import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{

  @ViewChild('nameInput') nameInputRef: ElementRef | null=null;
  @ViewChild('amountInput') amountInputRef: ElementRef | null = null;


  constructor(private slService: ShoppingService) { }

  onAdd(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    if(ingName !== '' && ingAmount !== ''){
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.slService.addIngredient(newIngredient);
    }else{
      alert("Please enter the data");
    }
    
  }
}
