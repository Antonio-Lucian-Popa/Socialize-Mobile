import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CommentsModalComponent } from './components/comments-modal/comments-modal.component';

const NB_MODULES: any[] = [
  ReactiveFormsModule
];

const COMPONENTS: any[] = [
  PostComponent
];

@NgModule({
  declarations: [...COMPONENTS, TimeAgoPipe, ViewPostComponent, TruncatePipe, CommentsModalComponent],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...COMPONENTS, ...NB_MODULES, TimeAgoPipe, TruncatePipe]
})
export class SharedModule { }
