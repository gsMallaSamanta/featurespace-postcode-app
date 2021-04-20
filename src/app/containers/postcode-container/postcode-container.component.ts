import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GetPostcode } from 'src/app/store/actions/postcode-actions';
import { PostcodeResponsePayload } from 'src/app/store/models/postcode-response-payload';
import { PostcodeState } from 'src/app/store/models/postcode-state';
import { getNearestPostcodeDetails, getPostcodeDetails, getPostcodeErrors } from 'src/app/store/selectors/postcode-selectors';

@Component({
  selector: 'app-postcode-container',
  templateUrl: './postcode-container.component.html'
})
export class PostcodeContainerComponent {

  public postcodeDetails$: Observable<PostcodeResponsePayload>;
  public nearestPostcodeDetails$: Observable<PostcodeResponsePayload[]>;
  public errors$: Observable<HttpErrorResponse>;

  constructor(
    private readonly store: Store<PostcodeState>, 
    private readonly router: Router  
  ) {
    this.postcodeDetails$ = this.store.pipe(select(getPostcodeDetails));
    this.nearestPostcodeDetails$ = this.store.pipe(select(getNearestPostcodeDetails));
    this.errors$ = this.store.pipe(select(getPostcodeErrors));

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      let postcode = event.url.substring(event.url.lastIndexOf('/')+1, event.url.length);
      this.store.dispatch(new GetPostcode(postcode));
    });
  }

  onSubmitClick(postcode: string) {
    this.router.navigate([`/postcode/${postcode}`]);
    this.store.dispatch(new GetPostcode(postcode));
  }

}
