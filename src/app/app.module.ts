import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { dadosdaufComponent } from './dadosdauf.component';
import { resuminhoComponent } from './resuminho.component';
import { todosdadinhosComponent } from './todosdadinhos.component';
import { RouterModule }   from '@angular/router';
import {UFService} from './services/uf.service'
import {SamuService} from './services/samu.service'
import {GetAllService} from "./services/pegartudinho.service";
@NgModule({
  declarations: [
    AppComponent,
    dadosdaufComponent,
    resuminhoComponent,
    todosdadinhosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'resuminho',
        component: resuminhoComponent
      },
      {
        path: 'todosdadinhos',
        component: todosdadinhosComponent
      },
      {
        path: 'dadosdauf',
        component: dadosdaufComponent
      }
    ])

  ],
  providers: [UFService, SamuService, GetAllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
