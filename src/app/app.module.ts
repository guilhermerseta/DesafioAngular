import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from '@angular/forms';
import { PadawanService } from './padawan.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PadawanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
