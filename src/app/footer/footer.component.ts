import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  appVersion: string;
  constructor() {
  }

  ngOnInit() {
    const { version: appVersion } = require('package.json');
    this.appVersion = appVersion;
    console.log(appVersion);
  }
}
