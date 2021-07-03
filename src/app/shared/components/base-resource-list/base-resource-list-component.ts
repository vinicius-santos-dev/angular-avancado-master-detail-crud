import { Injectable, Injector, OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

@Injectable()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {
  constructor(
    protected injector: Injector,
    public resources: T[] = [],
    protected baseResourceService: BaseResourceService<T>
  ) {}

  ngOnInit(): void {
    this.baseResourceService.getAll().subscribe(
      (resources) => (this.resources = resources).sort((a, b) => b.id - a.id),
      (error) => alert('Erro ao carregar a lista.')
    );
  }

  public deleteResource(resource: T): void {
    const mustDelete: boolean = confirm('Deseja realmente deletar essa categoria?');

    if (mustDelete) {
      this.baseResourceService.delete(resource.id).subscribe(
        () => {
          this.resources = this.resources.filter((element) => element != resource);
        },
        () => alert('Erro ao tentar excluir!')
      );
    }
  }
}
