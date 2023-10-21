import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ViewPostComponent } from './components/view-post/view-post.component';

const NB_MODULES: any[] = [];

const COMPONENTS: any[] = [
  PostComponent
];

@NgModule({
  declarations: [...COMPONENTS, TimeAgoPipe, ViewPostComponent],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...COMPONENTS, ...NB_MODULES, TimeAgoPipe]
})
export class SharedModule { }
