import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DragulaModule } from 'ng2-dragula';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NguCarouselModule, NguCarouselConfig, NguCarousel } from '@ngu/carousel';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SessionManagerService } from './services/session-manager.service';
import { GlobalsService } from './services/globals.service';
import { SharedService } from './services/shared.service';
import { YoutubeGetVideo } from './services/youtube.service';
import { PlaylistControlService } from './services/playlist-control.service';
import { SettingsComponent } from './components/youtube-settings.component';
import { SearchComponent } from './components/youtube-search.component';
import { AboutComponent } from './components/youtube-about.component';
import { HistoryComponent } from './components/youtube-history.component';
import { PlayerComponent } from './components/player/player.component';

import { CategoryComponent } from './components/category/category.component';

import { PlaylistComponent } from './components/playlist/playlist.component';
import { RelatedComponent } from './components/related/related.component';
import { RoomComponent } from './components/room/room.component';
import { YoutubeIframeComponent } from './components/youtube-iframe/youtube-iframe.component';
import { ButtonsComponent } from './components/player/buttons/buttons.component';

const config: SocketIoConfig = { url: environment.serverURL, options: {} };

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DragulaModule.forRoot(),
    NguCarouselModule,
    AppRoutingModule,
    DragDropModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent,
    SettingsComponent,
    SearchComponent,
    AboutComponent,
    HistoryComponent,
    CategoryComponent,
    PlayerComponent,
    PlaylistComponent,
    RelatedComponent,
    RoomComponent,
    YoutubeIframeComponent,
    ButtonsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    SessionManagerService,
    PlayerComponent,
    PlaylistComponent,
    YoutubeGetVideo,
    PlaylistControlService,
    SharedService,
    GlobalsService,
    NguCarouselConfig,
    NguCarousel,
    ButtonsComponent
  ]
})

export class AppModule { }

