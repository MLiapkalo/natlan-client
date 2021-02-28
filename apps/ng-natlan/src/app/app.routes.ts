import { Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';

const routes: Routes = [
  {
    path: 'results',
    loadChildren: () =>
      import('./analysis-results/analysis-results.module').then(
        m => m.AnalysisResultsModule
      ),
  },
  {
    path: '',
    component: HomeViewComponent,
  },
];

export default routes;
