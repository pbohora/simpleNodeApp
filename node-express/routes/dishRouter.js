const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("We will send you all the dishes you.");
  })
  .post((req, res, next) => {
    res.end(
      `We will put the dishes: ${req.body.name} with the details: ${
        req.body.description
      }`
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("This method is not supported in dishes");
  })

  .delete((req, res, next) => {
    res.end("All the dishes are deleted.");
  });

dishRouter
  .route("/:dishId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end(`We will send send the detail for the dish: ${req.params.dishId}`);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("This method is not supported in dishes");
  })

  .put((req, res, next) => {
    res.write(`Updating the dish: ${req.params.dishId} \n`);
    res.end(
      `Will update the dish: ${req.body.name} with details: ${
        req.body.description
      }`
    );
  })

  .delete((req, res, next) => {
    res.end(`Deleting dish with ID: ${req.params.dishId}`);
  });

module.exports = dishRouter;
