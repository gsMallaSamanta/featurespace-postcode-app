import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostcodeResponsePayload } from 'src/app/store/models/postcode-response-payload';

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.scss']
})
export class PostcodeComponent {

  _postcodeDetails:PostcodeResponsePayload;

  @Input() 
  set postcodeDetails(value: PostcodeResponsePayload) {
    this._postcodeDetails = value;
    this.errors = null;
  };
  @Input() nearestPostcodeDetails: PostcodeResponsePayload[];
  @Input() errors: HttpErrorResponse;
  @Output() submitEvent = new EventEmitter<string>();

  postcodeForm: FormGroup = new FormGroup({
    postcode: new FormControl('')
  });

  constructor() { }

  submit() {
    let postcode = this.postcodeForm.value.postcode.trim();
    if(this.isPostcodeValid(postcode)) {
      this.submitEvent.emit(this.postcodeForm.value.postcode.trim());
    } else {
      this.errors = {
        ...this.errors,
        error: {
          error: 'Postcode length too small'
        }
      }
    }
  }

  isPostcodeValid(postcode: string):boolean {
    if(postcode.length < 6) {
      return false;
    }
    return true;
  }

}
