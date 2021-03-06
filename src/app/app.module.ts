import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {
	NguCarouselModule,
	NguCarouselConfig,
	NguCarousel
} from '@ngu/carousel';
import { environment } from '../environments/environment';
import { ShortNumPipe } from './pipes/short-num.pipe';

import { AppComponent } from './app.component';
import { SessionManagerService } from './services/session-manager.service';
import { GlobalsService } from './services/globals.service';
import { SharedService } from './services/shared.service';
import { YoutubeGetVideo } from './services/youtube.service';
import { PlaylistControlService } from './services/playlist-control.service';
import { SettingsComponent } from './components/settings/settings.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { HistoryComponent } from './components/history/history.component';
import { PlayerComponent } from './components/player/player.component';

import { CategoryComponent } from './components/category/category.component';

import { PlaylistComponent } from './components/playlist/playlist.component';
import { RelatedComponent } from './components/related/related.component';
import { RoomComponent } from './components/room/room.component';
import { YoutubeIframeComponent } from './components/youtube-iframe/youtube-iframe.component';
import { ButtonsComponent } from './components/player/buttons/buttons.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { CategoryBadgeComponent } from './components/category/category-badge/category-badge.component';

import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';
import { VideoItemEnhancedComponent } from './components/video-item/video-item-enhanced/video-item-enhanced.component';
import { VideoItemGridComponent } from './components/video-item/video-item-grid/video-item-grid.component';
import { VideoItemListComponent } from './components/video-item/video-item-list/video-item-list.component';
import { PlayerMiniComponent } from './components/player-mini/player-mini.component';
import { FeedComponent } from './components/feed/feed.component';

const config: SocketIoConfig = { url: environment.serverURL, options: {} };

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
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
		ButtonsComponent,
		VideoItemComponent,
		CategoryBadgeComponent,
		ModalComponent,
		ShortNumPipe,
		VideoItemEnhancedComponent,
		VideoItemGridComponent,
		VideoItemListComponent,
		PlayerMiniComponent,
		FeedComponent
	],
	bootstrap: [AppComponent],
	providers: [
		SessionManagerService,
		PlayerComponent,
		PlaylistComponent,
		YoutubeGetVideo,
		PlaylistControlService,
		SharedService,
		GlobalsService,
		ModalService,
		ModalComponent,
		NguCarouselConfig,
		NguCarousel,
		ButtonsComponent,
		CategoryBadgeComponent
	]
})
export class AppModule { }
