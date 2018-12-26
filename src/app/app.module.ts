import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ObserversModule} from '@angular/cdk/observers';
import { MatInputModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { DetailsviewComponent } from './detailsview/detailsview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipe } from './filter.pipe';

import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    DetailsComponent,
    DetailsviewComponent,
    PagenotfoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ObserversModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    // MatFormField
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
