import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit, ElementRef, Renderer2, REQUEST } from '@angular/core';
@Component
(
  {
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.html',
    styleUrl: './header.css',
  }
)

export class Header implements AfterViewInit
{
  constructor(private el : ElementRef, private renderer : Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  readonly success_message: string = "Succés de la Copie !"
  readonly fail_Message: string = "Échec de la Copie";

  x_Cursor: number = 0;
  y_Cursor: number = 0;

  ngAfterViewInit(): void 
  {
    if(!isPlatformBrowser(this.platformId))
    {
      const header = this.el.nativeElement.querySelector('.main-header');

      if(header)
      {
        // requestAnimationFrame(() => 
        { setTimeout(() => { header.classList.add('fade-In'); }, 50); };
      }
    }
  }

  copyToClipBoard(copied: string, message: string, event: MouseEvent): void
  {
    if(!isPlatformBrowser(this.platformId)) return;

    if (event)
    {
      event.preventDefault();  // Empêche la navigation si c'est un <a>
      event.stopPropagation(); // Empêche la propagation
    }

    this.x_Cursor = event.clientX;
    this.y_Cursor = event.clientY;
  
    /* Écriture dans la Console */
    navigator.clipboard.writeText(copied).then(() => { console.log(message); this.showNotification(message, true) })
    .catch(error => { console.error(this.fail_Message, error); this.showNotification(this.fail_Message, false)})
  }

  showNotification(message: string, isSuccess: boolean)
  {
    /* Création d'un élément div pour la notif */
    const notification = this.renderer.createElement('div');
    this.renderer.addClass(notification, 'custom-notification');

    this.renderer.setStyle(notification, 'left', `${this.x_Cursor}px`);
    this.renderer.setStyle(notification, 'top', `${this.y_Cursor + 10}px`);

    if(!isSuccess)
      message = this.fail_Message;
  
    this.renderer.setStyle(notification, 'background-color', isSuccess ? '#77ad78ff' : '#f1857dff');

    // Ajoute le message
    const text = this.renderer.createText(message);
    this.renderer.appendChild(notification, text);

    // Ajoute la notification au body
    this.renderer.appendChild(document.body, notification);

    // Supprime la notification après 2 secondes
    setTimeout(() => { this.renderer.removeChild(document.body, notification); }, 2000);
  }
}
