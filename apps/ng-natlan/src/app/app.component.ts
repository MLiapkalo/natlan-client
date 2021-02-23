import { Component } from '@angular/core';

@Component({
  selector: 'nl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;
  errors = null;

  handleErrors(errors) {
    console.log('errors', errors);
  }

  logResult(res) {
    console.log(res);
  }

  handleLoadingStateChange(state) {
    console.log(state);
    this.isLoading = state;
  }
}
