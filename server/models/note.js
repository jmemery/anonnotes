const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	note: {type: String, required: [true, "The note must have data"]}
}, {timestamps: true});

mongoose.model('Note', NoteSchema);