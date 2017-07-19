let mongoose = require('mongoose');
let Note = mongoose.model('Note')
module.exports = {
  index: (req, res)=> {
    Note.find({}, (err, notes)=>{
      if(err){
        let errors = [];
        for(let i in err.errors){
          errors.push(err.errors[i].message);
        }
        return res.status(400).send(errors);
      }else{
        return res.json(notes);
      }
    })
  },

  create: (req, res) => {
    let note = new Note(req.body);
    note.save( (err, savedNote)=>{
      if(err){
        let errors = [];
        for(let i in err.errors){
          errors.push(err.errors[i].message);
        }
        return res.status(400).send(errors);
      }else{
        res.json(savedNote);
      }
    })
  }
}
