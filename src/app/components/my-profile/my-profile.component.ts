import { Component, OnInit } from '@angular/core';
import {DeveloperAccountService, SellerMyProfile} from 'oc-ng-common-service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  selectedPage: 'myProfile' | 'changePassword' = 'myProfile';
  myProfile = new SellerMyProfile();
  isProcessing = false;

  constructor() { }

  ngOnInit(): void {
  }

  gotoPage(pageName) {
    this.selectedPage = pageName;
  }

  goBack() {
    history.back();
  }
}
