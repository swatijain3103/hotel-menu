import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabMenuModule,
    RouterModule.forRoot([{ path: '', component: AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
