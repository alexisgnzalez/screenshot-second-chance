import { Component, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import domtoimage from 'dom-to-image';

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
      console.log('using ngx-capture same stuff as html to canvas');
      this.captureService
        .getImage(this.areaToPrint.nativeElement, true)
        .pipe(tap((img) => this.captureService.downloadImage(img)))
        .subscribe();
    } else {
      console.log('using dom to image');
      domtoimage
        .toJpeg(this.areaToPrint.nativeElement, { quality: 0.95 })
        .then(function (dataUrl) {
          let link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
    }
  }
}
