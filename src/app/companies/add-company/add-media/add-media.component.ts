import { Component, ViewChildren, QueryList, ElementRef, OnInit, ViewChild, AfterViewInit, EventEmitter, } from '@angular/core';
import { Marker } from './../../../models/marker';
import SignaturePad from 'signature_pad';
import {FileUploader} from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AdminService } from '../../../_services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit, AfterViewInit {
  marker: any;
  lat: number;
  lng: number;
  previewImg: SafeUrl;
  previewImg1: SafeUrl;
  previewImg2: SafeUrl;
  previewImg3: SafeUrl;
  previewImg4: SafeUrl;
  file: File;
  file1: File;
  file2: File;
  file3: File;
  file4: File;
  id: number;
  private selectedFile: File;
  firma: any;

  @ViewChild('sPad', {static: true}) signaturePadElement;
  signaturePad: any;
  uploader = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
    });
  uploader1 = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
    });
  uploader2 = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
    });
  uploader3 = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
    });
  uploader4 = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
    });

  constructor(
    private sanitizer: DomSanitizer,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
      this.marker = new Marker();
  }
   ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }

  ngOnInit(): void {
    this.maplatlang();
    this.buttons();
    this.id = this.activatedRoute.snapshot.params["id_company"];
    console.log(this.id);
  }

  maplatlang() {
    let _this = this;
    const myLatlng = {lat: 28.658638071997842, lng: -106.06216647017715};
    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: myLatlng});
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow(
        {content: 'Registrar ubicacion del establecimiento!', position: myLatlng});
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener('click', function(mapsMouseEvent) {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
      infoWindow.setContent(mapsMouseEvent.latLng.toString());
      infoWindow.open(map);
      _this.lat = myLatlng.lat;
      _this.lng = myLatlng.lng;
    });
  }

  buttons() {
        // ================================================================================= //
        this.uploader.onAfterAddingFile = (file) => {
          //console.log('***** onAfterAddingFile ******')
          this.previewImg = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
          //console.log('ImageUpload:uploaded:', item, status, response);
        };
        this.uploader.onCompleteAll = () => {
          //console.log('******* onCompleteAll *********')
        }
        this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
          //console.log('***** onWhenAddingFileFailed ********')
        }
        // ============================================1===================================== //
        this.uploader1.onAfterAddingFile = (file) => {
          //console.log('***** onAfterAddingFile1 ******')
          this.previewImg1 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader1.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
          //console.log('ImageUpload:uploaded:', item, status, response);
        };
        this.uploader1.onCompleteAll = () => {
          //console.log('******* onCompleteAll *********')
        }
        this.uploader1.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
          //console.log('***** onWhenAddingFileFailed ********')
        }
        // ============================================2===================================== //
        this.uploader2.onAfterAddingFile = (file) => {
          //console.log('***** onAfterAddingFile2 ******')
          this.previewImg2 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader2.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
         // console.log('ImageUpload:uploaded:', item, status, response);
        };
        this.uploader2.onCompleteAll = () => {
          //console.log('******* onCompleteAll *********')
        }
        this.uploader2.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
          //console.log('***** onWhenAddingFileFailed ********')
        }
        // ============================================3===================================== //
        this.uploader3.onAfterAddingFile = (file) => {
          //console.log('***** onAfterAddingFile3 ******')
          this.previewImg3 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader3.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
          //console.log('ImageUpload:uploaded:', item, status, response);
        };
        this.uploader3.onCompleteAll = () => {
          //console.log('******* onCompleteAll *********')
        }
        this.uploader3.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
          //console.log('***** onWhenAddingFileFailed ********')
        }
        // ============================================4===================================== //
        this.uploader4.onAfterAddingFile = (file) => {
          //console.log('***** onAfterAddingFile4 ******')
          this.previewImg4 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader4.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
          //console.log('ImageUpload:uploaded:', item, status, response);
        };
        this.uploader4.onCompleteAll = () => {
          //console.log('******* onCompleteAll *********')
        }
        this.uploader4.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
          //console.log('***** onWhenAddingFileFailed ********')
        }

  }

  register() {
    this.savePNG();
    this.adminService.postImg(  this.id, this.file).subscribe(res => console.log(res));
    this.adminService.postImg1(  this.id, this.file1).subscribe(res => console.log(res));
    this.adminService.postImg2(  this.id, this.file2).subscribe(res => console.log(res));
    this.adminService.postImg3(  this.id, this.file3).subscribe(res => console.log(res));
    this.adminService.postImg4(  this.id, this.file4).subscribe(res => console.log(res));
    this.adminService.firma(  this.id, this.firma).subscribe(res => console.log(res));
    this.adminService.location(  this.lat, this.lng, 'localizacion de prueba', this.id).subscribe(res => console.log(res));
    this.router.navigate([`/generatepdf/${this.id}`]);

  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file = file;
  }
  public onFileSelected1(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file1 = file;
  }
  public onFileSelected2(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file2 = file;
  }
  public onFileSelected3(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file3 = file;
  }
  public onFileSelected4(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file4 = file;
  }

  clear() {
    this.signaturePad.clear();
  }

  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      // this.download(dataURL, 'signature.png');
      const file = new File([dataURL], 'signature.png');
      this.firma = file;
    }
  }

}
