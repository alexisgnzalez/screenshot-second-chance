import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'screenshot-second-chance';
  shouldDownload() {
    console.log('irole');
  }
}
