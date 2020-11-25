const express = require('express');
const router = express.Router();

// import postController:
const postController = require('../controllers/postController');

router.get("/", postController.findAll);
router.get("/:id", postController.findOne);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

module.exports = router;