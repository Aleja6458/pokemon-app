import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
})
export default class AboutPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({ name: 'descripcion', content: 'Este es mi about page' });
    this.meta.updateTag({ name: 'og_title', content: 'About Page' });
    this.meta.updateTag({ name: 'Keywords', content: 'Angular, curso' });
  }
}
