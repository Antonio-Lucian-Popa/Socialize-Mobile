import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss']
})
export class CommentsModalComponent implements OnInit {

  @Input()
  postId!: number;

  comments: any[] = []; // Replace with your comments data structure

  constructor(private modalController: ModalController, private commentService: CommentService) {}

  ngOnInit(): void {
    if(this.postId) {
      this.commentService.findCommentsByPostId(this.postId).subscribe(res => this.comments = res);
    }
  }

  // Implement methods to fetch comments, post new comments, etc.

  postComment(): void {
    // make be req to add comment to post
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  respondToComment(comment: string) {
    // Logic to respond to a comment
  }

  viewSubComments(comment: string) {
    // Logic to view subcomments
  }
}
