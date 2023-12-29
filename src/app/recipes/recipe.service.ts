import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService{
 
  recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Description', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a2_writing_a_recipe.jpg', 
        [
          new Ingredient('apples', 3),
          new Ingredient('banana', 2)
        ]),
        new Recipe('Another Test Recipe', 'Test Description', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a2_writing_a_recipe.jpg', 
        [
          new Ingredient('kiwi', 3),
          new Ingredient('lemon', 5)
        ])
      ];

      constructor(private slService: ShoppingService){  }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredient(ingredient: Ingredient[]){
        this.slService.addShopIngredient(ingredient);
      }
}