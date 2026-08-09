import { Component, signal, HostListener, Inject, PLATFORM_ID, AfterViewInit, ElementRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { InfoCard } from "../info-card/info-card";
import { PlayButton } from "../play-button/play-button";

@Component
({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, InfoCard, PlayButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App
{
  protected readonly title = signal('WebSite_CLCLEMENT2');

  isBrowser: boolean;
  isDone: Boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el : ElementRef)
  { this.isBrowser = isPlatformBrowser(this.platformId); }

    ngOnInit()
    { console.log("AppComponent initialisé côté :", isPlatformBrowser(this.platformId) ? "navigateur" : "serveur"); }

    @HostListener('window:scroll') onWindowWheel()
    {
      if(!this.isDone)
        {
          this.isDone = true;
          this.showFirstCard();
        }
    }

    public showFirstCard() 
    { window.scrollTo({top: 185, behavior: 'smooth'}); }
}
