import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent} from './databinding/databinding.component';
import {FirstRouteComponent} from './routing/first-route/first-route.component';
import { SecondRouteComponent } from './routing/second-route/second-route.component';
import {DirectivasComponent} from './directivas/directivas.component';
import {PipesComponent} from './pipes/pipes.component';
import {ProductosComponent} from './productos/productos.component';
import {RoutingComponent} from './routing/routing.component';
import {BasicobservableComponent} from './basicobservable/basicobservable.component';
import {EventlisteningComponent} from './eventlistening/eventlistening.component';
// import {HttpComponent} from './http/http.component';
import {HttpWithServicesComponent} from './http-with-services/http-with-services.component';
import {RestClientComponent} from './rest-client/rest-client.component';
import {StartComponent} from './start/start.component';
import {ObjecteventComponent} from './objectevent/objectevent.component';
import { ReactformComponent } from './reactform/reactform.component';
import {AsyncPipeComponent} from './async-pipe/async-pipe.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'objectevent', component: ObjecteventComponent },
  { path: 'directivas', component: DirectivasComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'subcomponentes', component: ProductosComponent},
  { path: 'rutas', component: RoutingComponent,
          children: [
            {path:'', component: FirstRouteComponent},
            {path:'route1', component: FirstRouteComponent},
            {path:'route2', component: SecondRouteComponent},
          ]},
  { path: 'observable', component: BasicobservableComponent},
  { path: 'eventos', component: EventlisteningComponent},
  //{ path: 'http', component: HttpComponent},
  { path: 'reactform', component: ReactformComponent },
  { path: 'httpServices', component: HttpWithServicesComponent },
  { path: 'asyncpipe', component: AsyncPipeComponent },
  { path: 'rest', component: RestClientComponent },
  { path: '', redirectTo:'start', pathMatch: 'full' },
  { path: '**', redirectTo:'/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
