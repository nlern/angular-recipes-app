import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class ShoppingListService {
  constructor(private store: Store<fromApp.AppState>) {}

  GetShoppingListState(): Observable<fromShoppingList.State> {
    return this.store.select('shoppingList');
  }

  AddIngredient(ingredient: Ingredient) {
    this.store.dispatch(ShoppingListActions.addIngredient({ ingredient }));
  }

  AddIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(ShoppingListActions.addIngredients({ ingredients }));
  }

  UpdateIngredient(newIngredient: Ingredient) {
    this.store.dispatch(ShoppingListActions.updateIngredient({ newIngredient }));
  }

  DeleteIngredient() {
    this.store.dispatch(ShoppingListActions.deleteIngredient());
  }

  StartEdit(index: number) {
    this.store.dispatch(ShoppingListActions.startEdit({ index }));
  }

  StopEdit() {
    this.store.dispatch(ShoppingListActions.stopEdit());
  }
}
