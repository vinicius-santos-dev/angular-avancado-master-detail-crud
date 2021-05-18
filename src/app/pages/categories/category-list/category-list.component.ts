import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  public categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (categories) => (this.categories = categories),
      (error) => alert('Erro ao carregar a lista.')
    );
  }

  public deleteCategory(category: Category): void {
    const mustDelete: boolean = confirm(
      'Deseja realmente deletar essa categoria?'
    );

    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => {
          this.categories = this.categories.filter(
            (element) => element != category
          );
        },
        () => alert('Erro ao tentar excluir!')
      );
    }
  }
}
