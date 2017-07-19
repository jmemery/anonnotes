import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
 newNote= {note: ''}
 @Output() newNoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  createNote(){
  	this.newNoteEvent.emit(this.newNote);
  }

}
