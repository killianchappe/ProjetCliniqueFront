import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularClinique';
  isLogin: Boolean = false;

  constructor(private router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        console.log(event['url'])
        if (event['url'] == '/signin' || event['url'] == '/register') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    })
  }

}