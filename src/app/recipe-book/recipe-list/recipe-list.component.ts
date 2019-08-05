import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Cuzcuz', 'Comida nordestina', 
    'https://abrilmdemulher.files.wordpress.com/2019/01/cuscuz-paulista-moderno.jpg?quality=90&strip=info&w=654&h=436&crop=1'),
    new Recipe('Taco', 'Comida mexicana', 'https://www.gazetadopovo.com.br/bomgourmet/wp-content/uploads/2016/03/URC1SYH21-670x430.jpg')]

  constructor() { }

  ngOnInit() { }  
}
