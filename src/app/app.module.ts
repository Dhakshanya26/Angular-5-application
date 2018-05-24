import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './Services/user-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngMaterialModule } from './ang.material.module';
import { MatIconRegistry } from '@angular/material';
import { MenuComponent } from './Pages/Menu/menu.component';
import { SidenavbarComponent } from './Pages/NavBar/sidenavbar.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { UserComponent } from './Pages/User/user.component';
import { UserDialogComponent } from './Pages/User/userdialog.component';
import { HelpComponent } from './Pages/Help/help.component';
import { AuthGuard } from './Gaurds/auth-guard';
import { LoginComponent } from './Pages/Login/login.component';
import { ProductModule } from './Pages/Products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavbarComponent,
    AlertComponent,
    UserComponent,
    UserDialogComponent,
    HelpComponent,
    LoginComponent
  ],
  entryComponents: [
    UserDialogComponent,
  ],
  providers: [AuthGuard, UserService, MatIconRegistry],
  imports: [
    AngMaterialModule,
    AppRoutingModule, ProductModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [BrowserAnimationsModule,AngMaterialModule],
  bootstrap: [AppComponent],
})

export class AppModule {
    constructor(private mdIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
      mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
    }
}


export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}
