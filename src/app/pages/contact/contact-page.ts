import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.html',
})
export default class ContactPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'descripcion', content: 'Este es mi Contact page' });
    this.meta.updateTag({ name: 'og_title', content: 'Contact Page' });
    this.meta.updateTag({ name: 'Keywords', content: 'Angular, Contact' });
  }
}
