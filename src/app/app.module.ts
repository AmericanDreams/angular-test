import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HeaderComponent } from './componenets/header/header.component';
import { MenuItemComponent } from './componenets/menu-item/menu-item.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    BlogsComponent,
    ReportsComponent,
    HeaderComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
