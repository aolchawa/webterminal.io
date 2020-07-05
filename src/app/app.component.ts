import { Component } from '@angular/core';

declare var $: any; // This variable is used to initialise bootstrap tooltip

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }
}
