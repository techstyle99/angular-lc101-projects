import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})

export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Photoes of the Century';
  image1 = "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  image2 = "https://images.unsplash.com/photo-1616784660528-e1824a8ae041?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  image3 = "https://images.unsplash.com/photo-1621739165914-7155e5d4816e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWxvbiUyMG11c2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  constructor() { }

  ngOnInit() {
  }

}