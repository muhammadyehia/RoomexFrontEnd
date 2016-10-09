import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { PlanetComponent} from './planet/index'

@NgModule({
  imports: [ BrowserModule,HttpModule ],
  declarations: [ AppComponent ,PlanetComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
