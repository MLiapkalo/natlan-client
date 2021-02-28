import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nl-home-view',
  template: `
    <div class="payload-form-wrapper">
      <nl-payload-form
        (loadingStateChange)="handleLoadingStateChange($event)"
        (payloadAnalyzed)="logResult($event)"
        (errorsCaught)="handleErrors($event)"
      ></nl-payload-form>
    </div>
    <nl-loading-spinner *ngIf="isLoading"></nl-loading-spinner>
  `,
  styles: [
    `
      .payload-form-wrapper {
        width: 90%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin: 0 auto;
      }
    `,
  ],
})
export class HomeViewComponent {
  isLoading = false;
  errors = null;

  constructor(private readonly router: Router) {}

  handleErrors(errors) {
    console.log('errors', errors);
  }

  logResult(res) {
    console.log(res);
    this.router.navigateByUrl('/results');
  }

  handleLoadingStateChange(state) {
    console.log(state);
    this.isLoading = state;
  }
}
