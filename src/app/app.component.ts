import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'geladeira-ng';
  content = 'Welcome do Meat App!';

  ngOnInit(): void {
  }
  constructor() { }
}
