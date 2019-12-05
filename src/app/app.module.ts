
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { CarousalComponent } from './carousal/carousal.component';
import { RatingComponent } from './rating/rating.component';
import { HttpModule } from '@angular/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { NgbdModalComponent, NgbdModalContent } from './modal/modal.component';
import { ProductDataService } from "./product-data.service";
@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    Componenet2Component,
    Componenet3Component,
    CarousalComponent,
    RatingComponent,
    ProductDetailComponent,
    NgbdModalComponent,
    NgbdModalContent
   
  ],
   exports: [NgbdModalComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ProductDataService],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent,NgbdModalComponent]
})
export class AppModule { }
