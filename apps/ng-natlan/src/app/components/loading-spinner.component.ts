import { Component } from '@angular/core';

@Component({
  selector: 'nl-loading-spinner',
  template: `
    <div class="spinner-wrapper">
      <clr-spinner></clr-spinner>
    </div>
  `,
  styles: [
    `
      .spinner-wrapper {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        background-color: white;
        opacity: 0.8;
      }
    `,
  ],
})
export class LoadingSpinnerComponent {}
