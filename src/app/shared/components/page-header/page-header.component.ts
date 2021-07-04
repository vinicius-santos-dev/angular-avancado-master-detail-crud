import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() public pageTitle: string;
  @Input() public buttonClass: string;
  @Input() public buttonText: string;
  @Input() public buttonLink: string;
  @Input() public showButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
