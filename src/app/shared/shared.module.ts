import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';

const NB_MODULES: any[] = [];

const COMPONENTS: any[] = [
  PostComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...COMPONENTS, ...NB_MODULES]
})
export class SharedModule { }
