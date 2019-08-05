import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Tomate', 2), new Ingredient('Cebola', 3), new Ingredient('Arroz', 1)]
  
  constructor() { }

  ngOnInit() { }

}
