import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { switchMap } from 'rxjs/operators';
import { FavoriteService } from '../services/favorite.service';
import * as Toast from "nativescript-toast";
import { action } from "ui/dialogs";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { CommentComponent } from "../comment/comment.component";
import { Page } from 'ui/page';
import { View } from 'ui/core/view';
import { Animation, AnimationDefinition } from "ui/animation";
import { Color } from 'color';
import { SwipeGestureEventData, SwipeDirection } from 'ui/gestures';
import * as enums from 'ui/enums';

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
  showComments: boolean = false;
  cardImage: View;
  commentList: View;
  cardLayout: View;

  constructor (
    private favoriteservice: FavoriteService,
    private dishservice: DishService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef,
    private page: Page
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

  onSwipe(args: SwipeGestureEventData) {
    if (this.dish) {
      this.cardImage = <View>this.page.getViewById<View>("cardImage");
      this.cardLayout = <View>this.page.getViewById<View>("cardLayout");
      this.commentList = <View>this.page.getViewById<View>("commentList");

      if (args.direction === SwipeDirection.up && !this.showComments ) {
        this.animateUp();
      }
      else if (args.direction === SwipeDirection.down && this.showComments ) {
        this.showComments = false;
        this.animateDown();
      }
    }

  }

  showAndHideComments() {
      this.cardImage = <View>this.page.getViewById<View>("cardImage");
      this.cardLayout = <View>this.page.getViewById<View>("cardLayout");
      this.commentList = <View>this.page.getViewById<View>("commentList");

      if (!this.showComments ) {
        this.animateUp();
      }
      else if (this.showComments ) {
        this.showComments = false;
        this.animateDown();
      }
  }

  animateUp() {
    let definitions = new Array<AnimationDefinition>();
    let a1: AnimationDefinition = {
        target: this.cardImage,
        scale: { x: 1, y: 0 },
        translate: { x: 0, y: -200 },
        opacity: 0,
        duration: 500,
        curve: enums.AnimationCurve.easeIn
    };
    definitions.push(a1);

    let a2: AnimationDefinition = {
        target: this.cardLayout,
        backgroundColor: new Color("#ffc107"),
        duration: 500,
        curve: enums.AnimationCurve.easeIn
    };
    definitions.push(a2);

    let animationSet = new Animation(definitions);

    animationSet.play().then(() => {
      this.showComments = true;
    })
    .catch((e) => {
        console.log(e.message);
    });
  }

  animateDown() {
    let definitions = new Array<AnimationDefinition>();
    let a1: AnimationDefinition = {
        target: this.cardImage,
        scale: { x: 1, y: 1 },
        translate: { x: 0, y: 0 },
        opacity: 1,
        duration: 500,
        curve: enums.AnimationCurve.easeIn
    };
    definitions.push(a1);

    let a2: AnimationDefinition = {
        target: this.cardLayout,
        backgroundColor: new Color("#ffffff"),
        duration: 500,
        curve: enums.AnimationCurve.easeIn
    };
    definitions.push(a2);

    let animationSet = new Animation(definitions);

    animationSet.play().then(() => {
    })
    .catch((e) => {
        console.log(e.message);
    });
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

  createAction() {
    let options = {
      title: "Dish Actions",
      cancelButtonText: "Cancel",
      actions: ["Add to Favorites", "Add comment"]
    };
    action(options).then(result => {
      if (result === "Add to Favorites") {
        this.addToFavorites();
      } else {
        console.log('Adding comment');
        this.createModalView();
      }
    });
  }

  createModalView() {
    let options: ModalDialogOptions = {
        viewContainerRef: this.vcRef,
        fullscreen: false
    };

    this.modalService.showModal(CommentComponent, options)
        .then((result: Comment) => {
          this.dish.comments.push(result);
          this.numcomments = this.dish.comments.length;
          let total = 0;
          this.dish.comments.forEach((comment: Comment) => total += comment.rating);
          this.avgstars = (total/this.numcomments).toFixed(2);
        });
  }
}
