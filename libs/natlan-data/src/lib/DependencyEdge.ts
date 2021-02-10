import { Label } from './enums/partOfSpeech';

export interface DependencyEdge {
  headTokenIndex: number;
  label: Label
}
