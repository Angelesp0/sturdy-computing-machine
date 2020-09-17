import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin/admin.service';


declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;

}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  constructor(
      public adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getLocations().subscribe(response => this.mapa(response));
  }

  mapa(locations) {

    console.log(locations);
    const myLatlng = {lat: 28.658638071997842, lng: -106.06216647017715};
    const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }]
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    let infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        const contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      `<h1 id="firstHeading" class="firstHeading">${locations[i]['company']}</h1>` +
      `<div id="bodyContent">` +
      `<br><b>Razon social: ${locations[i]['razon']}</b>` +
      `<br><b>RFC: ${locations[i]['rfc']}</b>` +
      `<br><b>Telefono Empresa: ${locations[i]['tel']}</b>` +
      `<br><b>Responsable del registro: ${locations[i]['first_name']} ${locations[i]['last_name']}</b>` +
      `<br><img height="80" src="http://192.168.2.18:3000/files/${locations[i]['nombre']}">` +
      '</div>' +
      '</div>';
        const lat = locations[i]['lat'];
        const lng = locations[i]['lng'];

        const lat1: number = + lat;
        const lng1: number = + lng;

        const latlng = {lat: lat1, lng: lng1};

        const marker = new google.maps.Marker({
            position: latlng,
            title: locations[i]['company']
        });
        google.maps.event.addListener(marker, "click", () => {
            infoWindow.close();
            infoWindow = new google.maps.InfoWindow({position: latlng});
            infoWindow.setContent(contentString);
            infoWindow.open(map);
            });
        marker.setMap(map);
    }
    map.addListener('click', function(mapsMouseEvent) {
        // Close the current InfoWindow.
        infoWindow.close();
      });
  }

}
