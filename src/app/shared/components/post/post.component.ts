import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
   // const swiperContainer: HTMLElement = this.elRef.nativeElement.querySelector('swiper-container');
    const images: NodeListOf<HTMLImageElement> = this.elRef.nativeElement.querySelectorAll('img.post-image');

    images.forEach(img => {
      img.onload = () => {
       // this.adjustContainerHeight(swiperContainer);
      };
    });

    // Assuming you have swiper instance available
    // Listen to slide change and adjust height
    const mySwiper = document.querySelector('.swiper');
    if(mySwiper) {
      mySwiper.addEventListener('slideChange', () => {
       // this.adjustContainerHeight(swiperContainer);
      });
    }
  }

  adjustContainerHeight(container: HTMLElement) {
    const activeSlide: HTMLElement = container.querySelector('.swiper-slide-active')!;
    const activeImage: HTMLImageElement = activeSlide.querySelector('.post-image')!;

    const aspectRatio = activeImage.naturalWidth / activeImage.naturalHeight;

    if (aspectRatio > 1) {
      container.style.height = '300px'; // adjust accordingly
    } else {
      container.style.height = '500px'; // adjust accordingly
    }
  }

}
