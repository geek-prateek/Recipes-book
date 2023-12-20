import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    ingredientChanged = new EventEmitter<Ingredient>();
    private ingredients: Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient('Cauliflower', 10)
      ];

      getIngredients(){
        return this.ingredients;
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
      }

      addShopIngredient(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
      }
}