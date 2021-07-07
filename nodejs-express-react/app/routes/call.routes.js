module.exports = (app) => {
    const calls = require('../controller/call.controller.js');

    // Create a new Note
    app.get('/calls', calls.get);

    // Retrieve all Notes
    app.get('/agent/:id', calls.getAgent);

    // Retrieve a single Note with noteId
    app.get('/calls/:number', calls.getCallNumber);

}