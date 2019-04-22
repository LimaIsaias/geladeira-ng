import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor() {
  }
  public appVersion;

  ngOnInit() {
    const { version: appVersion } = require('package.json');
    console.log(appVersion);
  }
}
