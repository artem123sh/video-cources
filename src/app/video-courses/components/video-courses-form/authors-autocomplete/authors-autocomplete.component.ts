import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, forwardRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Author } from 'src/app/video-courses/shared/models/course.model';

@Component({
  selector: 'vc-authors-autocomplete',
  templateUrl: './authors-autocomplete.component.html',
  styleUrls: ['./authors-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsAutocompleteComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsAutocompleteComponent),
      multi: true,
    },
  ],
})
export class AuthorsAutocompleteComponent implements OnInit, ControlValueAccessor, Validators, OnChanges {
  @Input()
  public authors: Author[] | null;

  public authorsForm: FormGroup;

  visible = true;

  selectable = true;

  removable = true;

  addOnBlur = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  authorsCtrl = new FormControl();

  filteredAuthors: Observable<Author[]>;

  allAuthors: Author[] = [];

  @ViewChild('AuthorInput', { static: false }) authorInput: ElementRef<HTMLInputElement>;

  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.authorsForm = this.formBuilder.group({
      authors: this.formBuilder.array([], Validators.required),
    });
    this.filteredAuthors = this.authorsCtrl.valueChanges.pipe(
      startWith(null),
      map((author: string | null) => (author ? this._filter(author) : this.allAuthors.slice())),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.authors?.currentValue) {
      this.allAuthors = changes?.authors?.currentValue;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  registerOnTouched(): void {}

  get authorsFormArray(): any {
    return this.authorsForm.get('authors') as FormArray;
  }

  public writeValue(values: any[] | undefined): void {
    if (values !== undefined && values.length) {
      values.forEach((value: Author) => this.addAuthor(value));
    }
  }

  private addAuthor(author: Author): void {
    this.authorsFormArray.push(this.newAuthor(author));
  }

  private newAuthor(author: Author): FormGroup {
    return this.formBuilder.group({
      id: author.id,
      name: author.name,
    });
  }

  registerOnChange(fn: any): void {
    this.authorsForm.valueChanges.subscribe(fn);
  }

  public onBlur(): void {
    this.authorsForm.markAllAsTouched();
  }

  public validate(): any {
    return this.authorsForm.value.authors.length ? null : { duration: { valid: false } };
  }

  public remove(idToRemove: number): void {
    const index = this.authorsFormArray.value.findIndex(({ id }: Author) => id === idToRemove);
    this.authorsFormArray.removeAt(index);
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    const author = this.allAuthors.find(({ id }) => id === event.option.value) as Author;
    this.addAuthor(author);
    this.authorInput.nativeElement.value = '';
    this.authorsCtrl.setValue(null);
  }

  private _filter(value: string): Author[] {
    const filterValue = value.toLowerCase();
    return this.allAuthors.filter(({ name }) => name.toLowerCase().includes(filterValue));
  }
}
