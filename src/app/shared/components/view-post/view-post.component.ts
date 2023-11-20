import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { CommentsModalComponent } from '../comments-modal/comments-modal.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  post!: Post;

  isPostLiked = false;

  showFullText = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private modalController: ModalController
    ) {}

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    if(postId) {
      this.postService.findPostById(postId).subscribe(post => this.post = post[0]);
    }
  }

  likePost(): void {
    this.isPostLiked = true;
    // TODO: make a be call to add like to post entity

    this.post.numberOfUserLikes += 1;

    // if the user clicks on likes to see the user that likes the post, we make a get req to be to retreive user likes from post id
  }

  unLikePost(): void {
    this.isPostLiked = false;

    // TODO: make a be call to remove like from post entity

    this.post.numberOfUserLikes -= 1;
  }

  toggleText() {
    this.showFullText = !this.showFullText;
  }

  onBack(): void {
    this.location.back();
  }

  async openCommentsModal() {
    const modal = await this.modalController.create({
      component: CommentsModalComponent,
      cssClass: 'comments-modal', // Custom class for styling
      componentProps: {
        postId: this.post.id // Pass any necessary data to the modal
      }
    });

    return await modal.present();
  }

}
