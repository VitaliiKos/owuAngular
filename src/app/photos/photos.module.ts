import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos-component/photos/photos.component';
import {PhotoDataService} from "./photo-services/photo-data.service";
import {PhotoComponent} from './photos-component/photo/photo.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoDataService]
})
export class PhotosModule {
}
