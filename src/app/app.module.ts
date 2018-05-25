import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from './common.module';
import { MatIconRegistry } from '@angular/material';
import { ProductModule } from './Pages/Products/product.module';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './Pages/Menu/menu.component';
import { SidenavbarComponent } from './Pages/NavBar/sidenavbar.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { UserComponent } from './Pages/User/user.component';
import { UserDialogComponent } from './Pages/User/userdialog.component';
import { HelpComponent } from './Pages/Help/help.component';
import { LoginComponent } from './Pages/Login/login.component';


//Services
import { UserService } from './Services/user-service';
import { AuthGuard } from './Gaurds/auth-guard';

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
    CommonModule,
    AppRoutingModule, ProductModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [BrowserAnimationsModule, CommonModule],
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
