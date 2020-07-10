import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ng6-toastr-notifications';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material-module';

//routing module
import { routing } from './app.routing';
import { Router ,RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//custom component
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { OrderComponent } from './admin/order/order.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { LoginService } from './views/login/login.service';
import { RegisterService } from './views/register/register.service';
import { OurTeamComponent } from './views/about-us/our-team/our-team.component';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';
import { HomeHeaderComponent } from './container/home-layout/home-header/home-header.component';
import { HomeFooterComponent } from './container/home-layout/home-footer/home-footer.component';
import { HomeSidebarComponent } from './container/home-layout/home-sidebar/home-sidebar.component';
import { HomeLayoutComponent } from './container/home-layout/home-layout/home-layout.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductService } from './admin/product/product.service';
import { DialogService } from './shared/dialog.service';

//Error component
import { P500Component, P404Component  } from './views/error';
//auth
import { AuthInterceptor } from './views/auth/AuthInterceptor';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ConfirmedDialogComponent } from './confirmed-dialog/confirmed-dialog.component';
import { AddProductImageComponent } from './admin/product/add-product-image/add-product-image.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { CategoryService } from './shared/category.service';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { SubcategoryListComponent } from './admin/category/subcategory-list/subcategory-list.component';
import { AddCategoryDialogComponent } from './admin/category/category-list/add-category-dialog/add-category-dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    routing,
    SidebarModule.forRoot(),
    BlockUIModule.forRoot(),
    FontAwesomeModule,
    MaterialModule,
  ],
  entryComponents:[AddProductComponent, ConfirmedDialogComponent, AddCategoryDialogComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    OrderComponent,
    UserlistComponent,
    ProductComponent,
    CategoryComponent,
    P500Component,
    P404Component,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    OurTeamComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeSidebarComponent,
    HomeLayoutComponent,
    ContactUsComponent,
    DashboardComponent,
    AddProductComponent,
    ConfirmedDialogComponent,
    AddProductImageComponent,
    AdminSidebarComponent,
    ListProductComponent,
    CategoryListComponent,
    SubcategoryListComponent,
    AddCategoryDialogComponent,
    
 
  ],
  bootstrap: [ AppComponent ],
  providers: [

   // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ProductService,
  DialogService,
  CategoryService]
})
export class AppModule { }

