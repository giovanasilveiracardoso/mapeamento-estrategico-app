import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VisitsComponent } from './visits/visits.component';
import { FooterComponent } from './footer/footer.component';

import { VisitsService } from './visits/visits.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    VisitsComponent,
    FooterComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VisitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
