import { Sentiment, TextSpan } from '@natlan-workspace/natlan-data';
import { EntityType } from './enums/EntityType';

export interface EntityMention {
  text: TextSpan;
  type: EntityType;
  sentiment: Sentiment;
}
