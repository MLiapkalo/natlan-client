import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AnnotateTextResponse, DocType } from '@natlan-workspace/natlan-data';
import { NaturalLanguageService } from '../../natural-language/natural-language.service';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'nl-payload-form',
  templateUrl: './payload-form.component.html',
})
export class PayloadFormComponent {
  prevErrors: ValidationErrors = null;

  @Output()
  loadingStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  errorsCaught: EventEmitter<ValidationErrors> = new EventEmitter<ValidationErrors>();
  @Output()
  payloadAnalyzed: EventEmitter<AnnotateTextResponse> = new EventEmitter<AnnotateTextResponse>();

  form = this.fb.group({
    document: this.fb.group({
      content: ['', Validators.required],
      type: [DocType.PLAIN_TEXT],
    }),
    features: this.fb.group(
      {
        extractSyntax: [true],
        extractEntities: [true],
        extractDocumentSentiment: [true],
        extractEntitySentiment: [true],
        classifyText: [true],
      },
      { validators: this.hasSelectedFeatures }
    ),
  });

  private get hasSelectedFeatures(): ValidatorFn {
    return ({ value }: FormGroup): ValidationErrors | null => {
      const hasCheckedFields = Object.values(value).some(feature => feature);
      return hasCheckedFields
        ? null
        : { features: 'Select at least one feature.' };
    };
  }

  private get featuresFormGroup(): AbstractControl {
    return this.form.get('features');
  }

  get selectedFeaturesValidationError(): string {
    return this.featuresFormGroup.errors?.features;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly lang: NaturalLanguageService
  ) {
    this.featuresFormGroup.statusChanges.pipe().subscribe(() => {
      if (this.prevErrors !== this.featuresFormGroup.errors) {
        this.errorsCaught.emit(this.featuresFormGroup.errors);
        this.prevErrors = this.featuresFormGroup.errors;
      }
    });
  }

  send() {
    this.lang
      .annotateText(this.form.value)
      .pipe(
        tap(() => this.loadingStateChange.emit(true)),
        finalize(() => this.loadingStateChange.emit(false))
      )
      .subscribe(result => this.payloadAnalyzed.emit(result));
  }
}
