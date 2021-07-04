import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

@NgModule({
  declarations: [BreadcrumbComponent, PageHeaderComponent, FormFieldErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CommonModule, ReactiveFormsModule, RouterModule, BreadcrumbComponent, PageHeaderComponent, FormFieldErrorComponent],
})
export class SharedModule {}
