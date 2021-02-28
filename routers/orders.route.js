module.exports = app => {
    const controller = require('../controllers/orders.controller');

    var router = require("express").Router();

    // Endpoint: GET on api/orders
    router.get('/', controller.findAll);

    // Endpoint: POST on api/orders (CREATE)
    router.post('/', controller.createOrder);

    app.use("/api/orders", router);
};