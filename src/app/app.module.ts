import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from "ngx-toastr";


import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HttpComponent} from './http/http.component';
import { ProductRestService} from './shared/services/product-rest.service';
import { HttpWithServicesComponent } from './http-with-services/http-with-services.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetalleComponent } from './productos/productos-detalle/productos-detalle.component';
import { RestClientComponent } from './rest-client/rest-client.component';
import { RoutingComponent } from './routing/routing.component';
import { FirstRouteComponent } from './routing/first-route/first-route.component';
import { SecondRouteComponent } from './routing/second-route/second-route.component';
import { BasicobservableComponent } from './basicobservable/basicobservable.component';
import { ReactformComponent } from './reactform/reactform.component';
import { EventlisteningComponent } from './eventlistening/eventlistening.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { StartComponent } from './start/start.component';
import { ObjecteventComponent } from './objectevent/objectevent.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import {InterceptorService, SecondInterceptor} from './shared/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DirectivasComponent,
    DatabindingComponent,
    HttpComponent,
    HttpWithServicesComponent,
    ProductosComponent,
    ProductosDetalleComponent,
    RestClientComponent,
    RoutingComponent,
    FirstRouteComponent,
    SecondRouteComponent,
    BasicobservableComponent,
    ReactformComponent,
    EventlisteningComponent,
    HighlightDirective,
    StartComponent,
    ObjecteventComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      'timeOut': 5000,
      'closeButton': true,
      'tapToDismiss': true,
      'countDuplicates': true,
      'positionClass': 'toast-top-right'
    })
  ],
  providers: [ProductRestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecondInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
