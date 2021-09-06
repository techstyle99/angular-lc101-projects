import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})

export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = "https://images.unsplash.com/photo-1630769660701-3454835913dc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  image2 = "https://images.unsplash.com/photo-1630635609286-25f85770ab6a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  image3 = "https://images.unsplash.com/photo-1630547097612-1855d796c7f0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  constructor() { }

  ngOnInit() {
  }

}