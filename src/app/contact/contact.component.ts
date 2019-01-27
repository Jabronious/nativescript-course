import { Component, OnInit, Inject } from '@angular/core';
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: 'app-contact',
  moduleId: module.id,
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  contactInfo: string;
  errMess: string;

  constructor(@Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.contactInfo = "\n121, Clear Water Bay Road\nClear Water Bay, Kowloon\n" +
      "HONG KONG\nTel: +852 1234 5678\nFax: +852 8765 4321\nEmail:confusion@food.net"
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
