import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  constructor() {

    const zone = Zone.current.fork({name: 'myZone'});
    zone.run(() => {
      requestAnimationFrame(() => {
        console.log('requestAnimationFrame() callback is invoked in the zone', Zone.current.name);
        // since the callback of `requestAnimationFrame()` will be in the same zone
        // when it is scheduled, so the output will be 'requestAnimationFrame() callback is invoked
        // in the zone myZone'
      });
    });

  }
}

bootstrapApplication(App);
