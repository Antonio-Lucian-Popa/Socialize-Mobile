import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private location: Location) {}

  onBack(): void {
    // go to the prev page
    // TODO: add animation when go back
    this.location.back();
  }

}
