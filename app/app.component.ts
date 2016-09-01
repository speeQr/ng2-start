import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="jumbotron">
      <h1>This is the app!</h1>
    </div>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0,0,0,0.2); }
  `]
})
export class AppComponent {
  title = 'app works!';
}
