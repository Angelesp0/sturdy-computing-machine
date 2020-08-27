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
  image: any;
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
    this.signaturePad.penColor = 'rgb(0,0,255)';
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.maplatlang();
    this.buttons();
    this.id = this.activatedRoute.snapshot.params["id_company"];
  }

  maplatlang() {
    let _this = this;
    const myLatlng = {lat: 28.658638071997842, lng: -106.06216647017715};
    const map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: myLatlng});
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    const request = {
      query: 'Gestoria Empresarial Global Service S.C.',
      fields: ['name', 'geometry'],
    };

    service.findPlaceFromQuery(request, function(results, status) {
      console.log(status);
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);

          let place = results[i];
          const marker = new google.maps.Marker({
              map,
              position: place.geometry.location
            });
          google.maps.event.addListener(marker, "click", () => {
            infoWindow.setContent(place.name);
            infoWindow.open(map);
            });
        }
        map.setCenter(results[0].geometry.location);
      }
    });
    // infoWindow.open(map);
    // Configure the click listener.
    map.addListener('click', function(mapsMouseEvent) {
      const my = mapsMouseEvent.latLng;
      const lat = my.lat();
      const lng = my.lng();

      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
      infoWindow.setContent(mapsMouseEvent.latLng.toString());
      infoWindow.open(map);
      _this.lat = lat;
      _this.lng = lng;
    });
  }

  buttons() {
        // ================================================================================= //
        this.uploader.onAfterAddingFile = (file) => {
          this.previewImg = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
        };
        this.uploader.onCompleteAll = () => {
        }
        this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
        }
        // ============================================1===================================== //
        this.uploader1.onAfterAddingFile = (file) => {
          this.previewImg1 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader1.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
        };
        this.uploader1.onCompleteAll = () => {
        }
        this.uploader1.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
        }
        // ============================================2===================================== //
        this.uploader2.onAfterAddingFile = (file) => {
          this.previewImg2 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader2.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
        };
        this.uploader2.onCompleteAll = () => {
        }
        this.uploader2.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
        }
        // ============================================3===================================== //
        this.uploader3.onAfterAddingFile = (file) => {
          this.previewImg3 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader3.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
        };
        this.uploader3.onCompleteAll = () => {
        }
        this.uploader3.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
        }
        // ============================================4===================================== //
        this.uploader4.onAfterAddingFile = (file) => {
          this.previewImg4 = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
        }
        this.uploader4.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
        };
        this.uploader4.onCompleteAll = () => {
        }
        this.uploader4.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
        }

  }

  register() {
    this.savePNG();
    this.adminService.postImg(   this.id, this.file ).subscribe(res => console.log(res));
    this.adminService.postImg1(  this.id, this.file1).subscribe(res => console.log(res));
    this.adminService.postImg2(  this.id, this.file2).subscribe(res => console.log(res));
    this.adminService.postImg3(  this.id, this.file3).subscribe(res => console.log(res));
    this.adminService.postImg4(  this.id, this.file4).subscribe(res => console.log(res));
    this.adminService.firma(     this.id, this.firma).subscribe(res => console.log(res));
    console.log('locacion');
    this.adminService.locatio(  this.lat, this.lng, 'localizacion de prueba', this.id).subscribe(res => console.log(res));
    this.router.navigate([`/payment/${this.id}`]);
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
      this.image = blob;
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
      this.firma = this.b64toFile(dataURL);
    }
  }

  b64toFile(dataURI): File {
    // convert the data URL to a byte string
    const byteString = atob(dataURI.split(',')[1]);

    // pull out the mime type from the data URL
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // Convert to byte array
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // Create a blob that looks like a file.
    const blob = new Blob([ab], { 'type': mimeString });
    blob['lastModifiedDate'] = (new Date()).toISOString();
    blob['name'] = 'file';

    // Figure out what extension the file should have
    switch(blob.type) {
        case 'image/jpeg':
            blob['name'] += '.jpg';
            break;
        case 'image/png':
            blob['name'] += '.png';
            break;
    }
    // cast to a File
    return <File>blob;
}

}
