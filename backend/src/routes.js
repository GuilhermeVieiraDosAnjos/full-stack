const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController')
const PriorityController = require('./controllers/PriorityController')
const ContentController = require("./controllers/ContentControlles")

//Annotation Routes
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//Priority Routes
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update)

//Content Routes
routes.post('/content/:id', ContentController.update)



module.exports = routes;
