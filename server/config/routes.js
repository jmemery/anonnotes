let controller = require('../controllers/controller.js');

module.exports = (app) => {
	app.get('/api/notes', controller.index);
	app.post('/api/notes', controller.create);
	
}