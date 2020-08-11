import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { NotificationsService } from '../../_services/common/notifications.service';
import { Notification } from '../../models/notification';
import { UserService } from './../../_services/user/user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

import Chart from 'chart.js';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NavbarComponent implements OnInit , OnDestroy {

    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public isCollapsed = true;
    public limit = 4;

    public notifications: any;
    public currentUser: any;
    public size: number;
    public id_user: any;
    public selected: any;
    notificacion: any;
    descuentos: string [] = [
      '10', '20', '30', '40', '50', '60', '70', '80', '90'
    ];
    aceptado: any;
    solicitud: any;


    constructor(
      location: Location,
      private element: ElementRef,
      private router: Router,
      private notificationsService: NotificationsService,
      private authenticationService: UserService,
      config: NgbModalConfig,
      private modalService: NgbModal
    ) {
      this.aceptado = 'aceptado';
      this.solicitud = 'solicitud';

      this.notificacion = new Notification();
      config.backdrop = 'static';
      config.keyboard = false;
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.location = location;
      this.sidebarVisible = false;
    }

    async ngOnInit() {
      this.id_user = this.currentUser['user'].id_user;
        setInterval(() => {
          this.notification();
        }, 5000);
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         const $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
    }

    notification() {
      this.notificationsService.getNotifications(this.id_user).subscribe(x => {
        this.notifications = x;
        this.size = Object.keys(this.notifications).length;
      }, error => console.log());
      // console.log(1);
    }

    open(content, data) {
      this.selected = data;
      console.log(this.selected);
      this.modalService.open(content);
    }

     aceptarDescuento() {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    this.notificacion.subject = ('aceptado');
    this.notificacion.message = ('Descuento aceptado');
    this.notificacion.time = (now);
    this.notificacion.data = this.selected.data;
    this.notificacion.users_id_user = this.selected.id_sender;
    this.notificationsService.postNotifications(this.id_user, this.notificacion).subscribe( response => console.log(response));
    this.notificationsService.updateNotification(this.selected.id_notifications, this.selected.data ).subscribe( response => console.log(response));
    }

    rechazarDescuento() {
      const now = moment().format('YYYY-MM-DD HH:mm:ss');
      this.notificacion.subject = ('aceptado');
      this.notificacion.message = ('Descuento rechazado');
      this.notificacion.time = (now);
      this.notificacion.data = '0';
      this.notificacion.users_id_user = this.selected.id_sender;
      this.notificationsService.postNotifications(this.id_user, this.notificacion).subscribe( response => console.log(response));
      this.notificationsService.updateNotification(this.selected.id_notifications, '0').subscribe( response => console.log(response));
    }

    personalizarDescuento() {
      console.log(this.notificacion.data);
      console.log(this.selected);
      const now = moment().format('YYYY-MM-DD HH:mm:ss');
      this.notificacion.subject = ('aceptado');
      this.notificacion.message = ('Nuevo descuento');
      this.notificacion.time = (now);
      this.notificacion.users_id_user = this.selected.id_sender;
      console.log('post');
      this.notificationsService.postNotifications(this.id_user, this.notificacion).subscribe( response => console.log(response));
      console.log('update');
      this.notificationsService.updateNotification(this.selected.id_notifications, this.notificacion.data ).subscribe( response => console.log(response));
    }

    Confirmar() {
      this.notificationsService.updateNotification(this.selected.id_notifications, this.selected.data ).subscribe( response => console.log(response));
    }

    collapse() {
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      console.log(navbar);
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        const html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
          setTimeout(function(){
            mainPanel.style.position = '';
          }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const html = document.getElementsByTagName('html')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }else if (html.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { //asign a function
              html.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    }

    getTitle() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

    ngOnDestroy() {
      if (this.notifications) {
        clearInterval(this.notifications);
        console.log('destroid notifications');
      }
      if (this.size) {
        clearInterval(this.size);
        console.log('destroid size');

      }
    }
}
