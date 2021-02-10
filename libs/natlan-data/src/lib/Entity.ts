import { EntityType } from './enums/EntityType';
import { EntityMention } from './EntityMention';
import { Sentiment } from '@natlan-workspace/natlan-data';

export interface Entity {
  name: string;
  type: EntityType;
  metadata: Record<string, string>;
  salience: number;
  mentions: EntityMention[];
  sentiment: Sentiment;
}
