import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  getAllNotes(){
  	return this._http.get('/api/notes')
  		.map( data => data.json())
  		.toPromise();
  }

  createNote(note){
  	return this._http.post('/api/notes', note)
  		.map( data => data.json())
  		.toPromise();
  }
}
