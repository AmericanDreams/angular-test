import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    const lastVisitedUrl: string = localStorage.getItem('last_visited_url') ?? "";
        localStorage.removeItem('last_visited_url');
        if (lastVisitedUrl) {
            this.router.navigateByUrl(lastVisitedUrl);
        }
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                localStorage.setItem('last_visited_url', event.url);
            }
        });
  }
}
