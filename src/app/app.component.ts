import { Component, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('areaToPrint', { static: true }) areaToPrint: any;

  constructor(private captureService: NgxCaptureService) {}

  shouldDownload(html2canvas: boolean) {
    if (html2canvas) {
      console.log('using ngx-capture or html to canvas');
      this.captureService
        .getImage(this.areaToPrint.nativeElement, true)
        .pipe(tap((img) => this.captureService.downloadImage(img)))
        .subscribe();
    } else {
      console.log('using other stuff', this.areaToPrint);
    }
  }
}
