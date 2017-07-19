import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
	notes: Array<any>;
	errors: Array<any> = [];
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  	this.getAllNotes();
  }

  getAllNotes(){
  	this._noteService.getAllNotes()
  		.then( notes => this.notes = notes)
  		.catch( err => this.errors = err)
  }

  createNote(note){
  	this._noteService.createNote(note)
  		.then( response => {
  			console.log(response)
  			this.getAllNotes()
  		})
  		.catch( err => {
  			this.errors = JSON.parse(err._body);
  			console.log(this.errors);
  		})
  }

}
