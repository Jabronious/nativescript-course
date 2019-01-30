import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CouchbaseService } from '../services/couchbase.service';

@Injectable()
export class ReservationService {

  reservations: Array<number>;
  docId: string = "reservations";

  constructor(
    private couchbaseService: CouchbaseService
  ) {
    this.reservations = [];

    let doc = this.couchbaseService.getDocument(this.docId);
    if( doc == null) {
      this.couchbaseService.createDocument({"reservations": []}, this.docId);
    }
    else {
      this.reservations = doc.reservations;
    }
  }

  addReservation(id: number): boolean {
    this.reservations.push(id);
    this.couchbaseService.updateDocument(this.docId, {"reservations": this.reservations});

    return true;
  }
}
