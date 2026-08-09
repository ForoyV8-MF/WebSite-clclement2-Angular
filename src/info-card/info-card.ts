import { CommonModule, NgStyle } from '@angular/common'
import { Component, HostListener, Input } from '@angular/core';
import { Pipe, PipeTransform, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { create } from 'domain';

@Component
({
  selector: 'app-info-card',
  imports: [CommonModule],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})

export class InfoCard
{
//   constructor(private el : ElementRef, private renderer : Renderer2) {}

//   @Input() title: string = ''; // Titre

//   @Input() leftContent: string | HTMLElement = ''; // Left Side
//   // @Input() centerContent: string | HTMLElement = ''; // Center Side
//   @Input() rightContent: string | HTMLElement = ''; // Right Side

//   @Input() borderColor: string = 'var(--wide-green)'; // Couleur Bordure
//   @Input() borderWidth: string = '1px'; // Épaisseur
//   @Input() borderRadius: string = '8px'; // Rayon des Coing
//   // @Input() backGroundColor: string = 'var(--gradient)' // Couleur du Fond

//   @Input() scrollPosition: number = 0; // Position verticale du scroll pour que la carte apparaisse

//   @Input() padding: string = '1rem'; // Espacement Interne

//   @HostListener('window:scroll') onWindowWheel() { this.ScrollAnimation(); }

//   private ScrollAnimation()
//   {
//     const cardElement = this.el.nativeElement.querySelector('.info-card')

//     console.log(window.scrollY);

//     if(window.scrollY > this.scrollPosition)
//       this.renderer.addClass(cardElement, 'fade-In-Loading')
//   }
}
