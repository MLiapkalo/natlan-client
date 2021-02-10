import {
  Aspect,
  Case,
  Form,
  Gender,
  Mood,
  Person,
  Tag,
  Number as PartOfSpeechNumber,
  Proper,
  Reciprocity,
  Tense,
  Voice,
} from './enums/partOfSpeech';

export interface PartOfSpeech {
  tag: Tag;
  aspect: Aspect;
  case: Case;
  form: Form;
  gender: Gender;
  mood: Mood;
  number: PartOfSpeechNumber;
  person: Person;
  proper: Proper;
  reciprocity: Reciprocity;
  tense: Tense;
  voice: Voice;
}
