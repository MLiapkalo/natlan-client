import { AnnotateTextResponse } from '@natlan-workspace/natlan-data';

export interface State {
  results: AnnotateTextResponse;
  isLoading: boolean;
}
