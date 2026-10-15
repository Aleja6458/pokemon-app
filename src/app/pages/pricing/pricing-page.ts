import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
})
export default class PricingPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if(isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing Page';
    // }
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'descripcion', content: 'Este es mi Pricing page' });
    this.meta.updateTag({ name: 'og_title', content: 'Pricing Page' });
    this.meta.updateTag({ name: 'Keywords', content: 'Angular, curso' });
  }
}
