import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { switchMap } from 'rxjs/operators';
import { FavoriteService } from '../services/favorite.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as Toast from "nativescript-toast";

@Component({
  selector: 'app-dishdetail',
  moduleId: module.id,
  templateUrl: './dishdetail.component.html',
})
export class DishdetailComponent implements OnInit {

  avgstars: string;
  numcomments: number;
  favorite: boolean = false;
  dish: Dish;
  comment: Comment;
  errMess: string;

  constructor (
    private favoriteservice: FavoriteService,
    private fonticon: TNSFontIconService,
    private dishservice: DishService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    @Inject('baseURL') private baseURL
  ) {  }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => {
        this.dish = dish;
        this.favorite = this.favoriteservice.isFavorite(this.dish.id);
        this.numcomments = this.dish.comments.length;

        let total = 0
        this.dish.comments.forEach(comment => total += comment.rating);
        this.avgstars = (total/this.numcomments).toFixed(2);
      },
      errmess => { this.dish = null; this.errMess = <any>errmess; });
  }

  addToFavorites(): void {
    if(!this.favorite) {
      console.log('Adding to Favorites', this.dish.id);
      this.favorite = this.favoriteservice.addFavorite(this.dish.id);
      Toast.makeText("Added Dish " + this.dish.id).show();
    }
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
