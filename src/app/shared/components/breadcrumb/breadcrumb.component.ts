import { Component, Input, OnInit } from '@angular/core';

export interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() public items: BreadCrumbItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  public isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);

    return index === this.items.length - 1;
  }
}
