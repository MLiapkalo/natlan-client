import { TextSpan } from './TextSpan';
import { PartOfSpeech } from './PartOfSpeech';
import { DependencyEdge } from './DependencyEdge';

export interface Token {
  text: TextSpan;
  partOfSpeech: PartOfSpeech;
  dependencyEdge: DependencyEdge;
  lemma: string;
}
