import { environment } from '../../environments/environment';
import { NaturalLanguageMockService } from './natural-language.mock.service';
import { NaturalLanguageService } from './natural-language.service';

const defineNatLanImplementation = () =>
  environment.natLanMockEnabled
    ? NaturalLanguageMockService
    : NaturalLanguageService;

export {
  defineNatLanImplementation,
  NaturalLanguageService,
  NaturalLanguageMockService,
};
