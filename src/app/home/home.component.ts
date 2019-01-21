import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('baseURL') private baseURL) { }

    ngOnInit() {
      this.dishservice.getFeaturedDish()
        .subscribe(dish => this.dish = dish,
          errmess => this.dishErrMess = <any>errmess);
      this.promotionservice.getFeaturedPromotion()
        .subscribe(promotion => this.promotion = promotion,
          errmess => this.promoErrMess = <any>errmess);
      this.leaderservice.getFeaturedLeader()
        .subscribe(leader => this.leader = leader,
          errmess => this.leaderErrMess = <any>errmess);
    }

  }
