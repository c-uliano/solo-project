const PostController = require('../controllers/post.controller');

module.exports = app => {
    app.get('/api/post', PostController.findAll);

    app.get('/api/post/:id', PostController.findOne);

    app.post('/api/post', PostController.createOne);

    // * changes all values in the database to match the request body
    // app.put('/api/post/:id', PostController.updateOne);

    // * changes only the values in the request body
    app.patch('/api/post/:id', PostController.updateOne);

    app.delete('/api/post/:id', PostController.deleteOne);
};