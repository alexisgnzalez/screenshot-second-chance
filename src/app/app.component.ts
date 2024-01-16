import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'screenshot-second-chance';
  shouldDownload(html2canvas: boolean) {
    if (html2canvas) {
    } else {
    }
  }
}
