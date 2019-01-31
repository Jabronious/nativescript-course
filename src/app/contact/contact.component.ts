import { Component, OnInit, Inject } from '@angular/core';
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as Email from 'nativescript-email';
import * as phone from 'nativescript-phone';

@Component({
  selector: 'app-contact',
  moduleId: module.id,
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  contactInfo: string;
  errMess: string;

  constructor(
    private fonticon: TNSFontIconService
  ) { }

  ngOnInit() {
    this.contactInfo = "\n121, Clear Water Bay Road\nClear Water Bay, Kowloon\n" +
      "HONG KONG\nTel: +852 1234 5678\nFax: +852 8765 4321\nEmail:confusion@food.net"
  }

  sendEmail() {
    Email.available()
      .then((avail: boolean) => {
        if(avail) {
          Email.compose({
            to: ['confusion@food.net'],
            subject: '[ConFusion]: Query',
            body: 'Dear Sir/Madam:'
          });
        } else {
          console.log('No Email Configured');
        }
      });
  }

  callRestaurant() {
    console.log('Make phone call');
    phone.dial("212-555-1234",false);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
