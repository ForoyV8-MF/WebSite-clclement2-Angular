import { Component, HostListener, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component
({
  selector: 'app-play-button',
  imports: [CommonModule],
  templateUrl: './play-button.html',
  styleUrl: './play-button.css',
})

export class PlayButton
{}
