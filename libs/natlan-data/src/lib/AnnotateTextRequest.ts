import { Doc } from './Doc';
import { EncodingType } from './enums/EncodingType';

export interface AnnotateTextRequest {
  document: Doc;
  features: {
    extractSyntax?: boolean,
    extractEntities?: boolean,
    extractDocumentSentiment?: boolean,
    extractEntitySentiment?: boolean,
    classifyText?: boolean
  },
  encodingType?: EncodingType;
}
