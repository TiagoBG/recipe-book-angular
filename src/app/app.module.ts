import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeBookComponent } from './components/RecipeBook/recipe-book.component';
import { RecipeDetailComponent } from './components/RecipeBook/RecipeDetail/recipe-detail.component';
import { RecipeItemComponent } from './components/RecipeBook/RecipeItem/recipe-item.component';
import { RecipeListComponent } from './components/RecipeBook/RecipeList/recipe-list.component';
import { ShoppingListComponent } from './components/ShoppingList/shopping-list.component';
import { ShoppingListEditComponent } from './components/ShoppingList/ShoppingListEdit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
