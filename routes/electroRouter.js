const express = require('express');
const router = express.Router();

const electronicController = require('../controllers/electroController');

router.get("/", electronicController.findAll);
router.get("/:id", electronicController.findOne);
router.post("/", electronicController.create);
router.put("/:id", electronicController.update);
router.delete("/:id", electronicController.delete);

module.exports = router;