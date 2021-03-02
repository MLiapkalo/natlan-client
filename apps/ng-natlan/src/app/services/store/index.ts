import { StoreService } from './store.service';
import { State } from './state';

const getInitialState = (): State => ({
  results: null,
  isLoading: false,
});

export { StoreService, State, getInitialState };
