import { Component, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('area-to-print', { static: true }) areaToPrint: any;

  constructor(private captureService: NgxCaptureService) {}

  shouldDownload(html2canvas: boolean) {
    if (html2canvas) {
      console.log('using html to canvas');
    } else {
      console.log('using ngx-capture');
      this.captureService
        .getImage(this.areaToPrint.nativeElement, true)
        .pipe(
          tap((img) => {
            console.log(img);
          })
        )
        .subscribe();
    }
  }
}
