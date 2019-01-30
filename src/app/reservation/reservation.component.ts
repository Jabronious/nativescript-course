import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TextField } from 'ui/text-field';
import { Switch } from 'ui/switch';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ReservationModalComponent } from "../reservationmodal/reservationmodal.component";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { View } from 'ui/core/view';
import { Animation, AnimationDefinition } from "ui/animation";
import * as enums from 'ui/enums';
import { ReservationService } from '../services/reservation.service';
import { Page } from 'ui/page';

@Component({
  selector: 'app-reservation',
  moduleId: module.id,
  templateUrl: './reservation.component.html',
})
export class ReservationComponent implements OnInit {

  reservation: FormGroup;
  content: View;
  formSubmitted: boolean = false;

  constructor(
    private reservationservice: ReservationService,
    private formBuilder: FormBuilder,
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef,
    private page: Page
  ) {

    this.reservation = this.formBuilder.group({
      guests: 3,
      smoking: false,
      dateTime: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onSmokingChecked(args) {
    let smokingSwitch = <Switch>args.object;
    if(smokingSwitch.checked) {
      this.reservation.patchValue({ smoking: true });
    } else {
      this.reservation.patchValue({ smoking: false });
    }
  }

  onGuestChange(args) {
    let textField = <TextField>args.object;

    this.reservation.patchValue({ guests: textField.text });
  }

  onDateTimeChange(args) {
    let textField = <TextField>args.object;

    this.reservation.patchValue({ dateTime: textField.text });
  }

  onSubmit() {
    console.log(JSON.stringify(this.reservation.value));
    this.content = <View>this.page.getViewById<View>("reservation");
    this.animateInOut(this.content, 0, 0 , 0.5).then(() => {
      this.formSubmitted = this.reservationservice.addReservation(this.reservation.value);
      this.animateInOut(this.content, 1, 1, 1).then(() => {

      }).catch((e) => {
        console.log(e.message);
      });
    }).catch((e) => {
      console.log(e.message);
    })
  }

  createModalView(args) {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };

        this.modalService.showModal(ReservationModalComponent, options)
            .then((result: any) => {
                if (args === "guest") {
                    this.reservation.patchValue({guests: result});
                }
                else if (args === "date-time") {
                    this.reservation.patchValue({ dateTime: result});
                }
            });

    }

    animateInOut(view: View, x: number, y: number, opacity:number): Promise<any> {
      let definitions = new Array<AnimationDefinition>();
      let animation: AnimationDefinition = {
        target: view,
        scale: { x: x, y: y },
        opacity: opacity,
        duration: 500,
        curve: enums.AnimationCurve.easeIn
      };

      definitions.push(animation);
      let animationSet = new Animation(definitions);

      return animationSet.play();
    }
}
