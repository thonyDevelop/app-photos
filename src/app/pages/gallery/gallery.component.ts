import { Component } from '@angular/core';
import { PhotosService } from './../../services/photos.service'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {

  photos: string[] = [];

  constructor(
    private photosService: PhotosService
  ) {
    this.photos = photosService.photos
  }

  async takePhoto(){
    await this.photosService.addNewPhoto()
  }

}
