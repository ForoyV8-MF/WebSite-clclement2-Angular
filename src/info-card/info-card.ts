import { CommonModule } from '@angular/common'
import { Component, HostListener, Input } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Component
({
  selector: 'app-info-card',
  imports: [CommonModule],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})

export class InfoCard
{
  constructor(private el : ElementRef, private renderer : Renderer2) {}

  @Input() title: string = ''; // Titre

  @Input() ImagePath: string = ''; // Chemin de l'image
  @Input() Caption: string = ''; // Légende de l'image
  @Input() ALT: string = ''; // Texte alternatif de l'image

  @Input() Text: string | HTMLElement = ''; // Contenu Textuel

  @Input() scrollPosition: number = 0; // Position Verticale du Scrolling nécessaire pour Apparition

  @HostListener('window:scroll') onWindowWheel() { this.ScrollAnimation(); }

  private ScrollAnimation()
  {
    const cardElement = this.el.nativeElement.querySelector('.info-card')

    console.log(window.scrollY);

    if(window.scrollY > this.scrollPosition)
      this.renderer.addClass(cardElement, 'fade-In-Loading')
  }
}
