// TODO: RENAME FILE

const RenameController = require('../controllers/RENAME.controller');

module.exports = app => {
    app.get('/api/RENAME', RenameController.findAll);

    app.get('/api/RENAME/:id', RenameController.findOne);

    app.post('/api/RENAME', RenameController.createOne);

    // * changes all values in the database to match the request body
    // app.put('/api/RENAME/:id', RenameController.updateOne);

    // * changes only the values in the request body
    app.patch('/api/RENAME/:id', RenameController.updateOne);

    app.delete('/api/RENAME/:id', RenameController.deleteOne);
};