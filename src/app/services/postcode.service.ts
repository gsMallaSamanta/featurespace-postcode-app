import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseNearestResponsePayload, BaseResponsePayload, PostcodeResponsePayload } from '../store/models/postcode-response-payload';

@Injectable({
  providedIn: 'root'
})
export class PostcodeService {

  constructor(private readonly http: HttpClient) { }

  getPostcodeDetails(postcode: string): Observable<BaseResponsePayload> {
    const url = `http://postcodes.io/postcodes/${postcode}`;

    return this.http.get<BaseResponsePayload>(url);
  }

  getNearestPostcodeDetails(postcode: string): Observable<BaseNearestResponsePayload> {
    const url = `http://postcodes.io/postcodes/${postcode}/nearest`;

    return this.http.get<BaseNearestResponsePayload>(url);
  }
}
