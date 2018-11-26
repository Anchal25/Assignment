import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
    numberOfLikes:number = 100;
    numberOfDislikes:number = 50; 
  constructor() { }

  ngOnInit() {
  }
  likeButtonAction = function(){
      this.numberOfLikes++;
  }
  dislikButtoneAction = function(){
    if(this.numberOfLikes > 1)
    {
    this.numberOfLikes--;
    this.numberOfDislikes++;
    }
  }

}
