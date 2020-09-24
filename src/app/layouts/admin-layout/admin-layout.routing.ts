import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UsersComponent } from '../../users/users.component';
import { CompaniesComponent } from '../../companies/companies.component';
import { ServicesComponent } from '../../services/services.component';
import { AddCompanyComponent } from '../../companies/add-company/add-company.component';
import { JsPDFComponent } from '../../companies/js-pdf/js-pdf.component';
import { AddMediaComponent } from '../../companies/add-company/add-media/add-media.component';
import { PaymentsComponent } from '../../companies/payments/payments.component';
import { AuthGuard } from './../../_guards/auth.guard';
import { CollectComponent } from '../../collect/collect.component';
import { MaterialComponent } from '../../material/material.component';
import { AccountComponent } from '../../account/account.component';
import { DocumentsComponent } from '../../companies/documents/documents.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                  component: DashboardComponent},
    { path: 'user-profile',               component: UserProfileComponent},
    { path: 'table-list',                 component: TableListComponent},
    { path: 'typography',                 component: TypographyComponent},
    { path: 'icons',                      component: IconsComponent },
    { path: 'maps',                       component: MapsComponent },
    { path: 'notifications',              component: NotificationsComponent },
    { path: 'upgrade',                    component: UpgradeComponent },
    { path: 'users',                      component: UsersComponent},
    { path: 'companies',                  component: CompaniesComponent},
    { path: 'services',                   component: ServicesComponent, canActivate: [AuthGuard]},
    { path: 'add-company',                component: AddCompanyComponent},
    { path: 'add-media/:id_company',      component: AddMediaComponent},
    { path: 'generatepdf/:id_company',    component: JsPDFComponent},
    { path: 'payment/:id_company',        component: PaymentsComponent },
    { path: 'payment',                    component: CollectComponent },
    { path: 'material',                   component: MaterialComponent },
    { path: 'account',                    component: AccountComponent },
    { path: 'documents/:id_company',      component: DocumentsComponent }
];
