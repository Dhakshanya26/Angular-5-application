import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ShardModule } from './Shared/shard.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListModule } from './ProductList/product-list.module';
import { MenuComponent } from './Shared/menu/menu.component';
import {MatSidenav} from '@angular/material/sidenav';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { CustomFormModule } from './customform.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatIconRegistry
  
} from '@angular/material';
import { AnimationComponent } from './animation/animation.component';
import { MoreanimationComponent } from './animation/moreanimation.component';
import { AngMaterialComponent } from './angmaterial/angmaterial.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { MenulistComponent } from './contentprojection/menulist.component';
import {HoverToBlueDirective}  from './contentprojection/HoverColorChange';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './auth-guard';
import { UserService } from './Services/user-service';
import { LoginComponent } from './login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDialogComponent } from './user/userdialog.component';
import { HelpComponent } from './help/help.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimationComponent,
    MoreanimationComponent,
    AngMaterialComponent,
    SidenavbarComponent,
    ContentprojectionComponent,
    MenulistComponent,
    HoverToBlueDirective,
    AlertComponent,
    UserComponent,
    UserDialogComponent,
    HelpComponent,
  ],
  entryComponents: [
    UserDialogComponent,
  ],
  providers:[MatIconRegistry,AuthGuard,UserService ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'animation',component:AnimationComponent ,canActivate: [AuthGuard]},
      {path:'moreanimation',component:MoreanimationComponent ,canActivate: [AuthGuard]},
      {path:'materialdesign',component:AngMaterialComponent ,canActivate: [AuthGuard]},
      {path:'content-projection',component: MenulistComponent,canActivate: [AuthGuard]},
      {path:'users',component: UserComponent,canActivate: [AuthGuard]},
      {path:'login',component: LoginComponent},
      {path:'help',component: HelpComponent,canActivate: [AuthGuard]},
      {path:'',component: UserComponent,canActivate: [AuthGuard]},
       
    ]),
    CustomFormModule,
     ProductListModule,    BrowserAnimationsModule,    MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,
    MatCheckboxModule,    MatChipsModule,    MatDatepickerModule,    MatDialogModule,    MatExpansionModule,    MatGridListModule,
    MatIconModule,    MatInputModule,    MatListModule,    MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,    MatProgressBarModule,
    MatProgressSpinnerModule,    MatRadioModule,    MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,
    MatSnackBarModule,    MatSortModule,    MatTableModule,    MatTabsModule,    MatToolbarModule,
    MatTooltipModule,    MatStepperModule,    FormsModule,    ReactiveFormsModule,
  ],
  exports: [ 
    MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,
    MatChipsModule,    MatStepperModule,    MatDatepickerModule,    MatDialogModule,    MatExpansionModule,
    MatGridListModule,    MatIconModule,    MatInputModule,    MatListModule,    MatMenuModule,
    MatNativeDateModule,    MatPaginatorModule,    MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,
    MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSliderModule,
    MatSlideToggleModule,    MatSnackBarModule,    MatSortModule,    MatTableModule,    MatTabsModule,
    MatToolbarModule,    MatTooltipModule,    BrowserAnimationsModule,

  ],
  
  bootstrap: [AppComponent],
  
})



export class AppModule { constructor(private mdIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
  mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
}}


export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}
