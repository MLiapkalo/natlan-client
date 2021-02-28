import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnalysisResultsComponent } from './analysis-results.component';
import analysisResultsRoutes from './analysis-results.routes';

@NgModule({
  declarations: [AnalysisResultsComponent],
  imports: [CommonModule, RouterModule.forChild(analysisResultsRoutes)],
})
export class AnalysisResultsModule {}
