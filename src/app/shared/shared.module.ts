import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

const NB_MODULES: any[] = [];

const COMPONENTS: any[] = [
  PostComponent
];

@NgModule({
  declarations: [...COMPONENTS, TimeAgoPipe],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...COMPONENTS, ...NB_MODULES, TimeAgoPipe]
})
export class SharedModule { }
