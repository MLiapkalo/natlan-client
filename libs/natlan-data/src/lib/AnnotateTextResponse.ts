import { Sentence } from './Sentence';
import { Token } from './Token';
import { Entity } from './Entity';
import { Sentiment } from './Sentiment';
import { ClassificationCategory } from './ClassificationCategory';

export interface AnnotateTextResponse {
  sentences: Sentence[];
  tokens: Token[];
  entities: Entity[];
  documentSentiment: Sentiment;
  language: string;
  categories: ClassificationCategory[];
}
