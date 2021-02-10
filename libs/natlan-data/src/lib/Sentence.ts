import { TextSpan } from './TextSpan';
import { Sentiment } from './Sentiment';

export interface Sentence {
  text: TextSpan;
  sentiment: Sentiment;
}
