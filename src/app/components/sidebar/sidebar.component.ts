import { Component, OnInit } from '@angular/core';
import { UserService } from './../../_services/user/user.service';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',         title: 'Dashboard',    icon: 'design_app',            class: '' },
    { path: '/users',             title: 'Usuarios',     icon: 'users_single-02',       class: '' },
    { path: '/companies',         title: 'Empresas',     icon: 'shopping_shop',         class: '' },
    { path: '/maps',              title: 'Ubicaciones',  icon: 'location_pin',      class: '' },
    { path: '/payment',           title: 'Pagar',        icon: 'business_money-coins',  class: '' },
    { path: '/services',          title: 'Servicios',    icon: 'design_bullet-list-67', class: '' },
    { path: '/user-profile',      title: 'User Profile', icon: 'users_circle-08',       class: '' },
    { path: '/login',             title: 'Login',        icon: 'sport_user-run',        class: '' },


    // { path: '/add-media/140',     title: 'Multimedia',   icon: 'design_app',            class: '' },
    // { path: '/payment',           title: 'Pago',         icon: 'design_app',            class: '' },
    // { path: '/generatepdf/140',   title: 'Contrato',     icon: 'design_app',            class: '' },


     { path: '/icons', title: 'Icons',  icon: 'education_atom', class: '' },
    // { path: '/table-list', title: 'Table List',  icon: 'design_bullet-list-67', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'location_map-big', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon: 'ui-1_bell-53', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'text_caps-small', class: '' }
];

export const ROUTES_ejecutivo: RouteInfo[] = [
  { path: '/users',             title: 'Usuarios',     icon: 'users_single-02',       class: '' },
  { path: '/companies',         title: 'Empresas',     icon: 'shopping_shop',         class: '' },
  { path: '/user-profile',      title: 'User Profile', icon: 'users_circle-08',       class: '' },
  { path: '/login',             title: 'Login',        icon: 'sport_user-run',        class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;

  menuItems: any[];
  menusEjecutivo: any[];


  constructor(private authenticationService: UserService, private router: Router) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menusEjecutivo = ROUTES_ejecutivo.filter(menuEjecutivo => menuEjecutivo);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
  get isAdmin() {
    return this.currentUser['user'].role_id_role === 1;
  }
  get isExecutive() {
    return this.currentUser['user'].role_id_role === 2;
  }
  get isClient() {
    return this.currentUser['user'].role_id_role === 3;
  }
}
