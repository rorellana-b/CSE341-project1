const express = require("express");
const router = express.Router();

const usersController = require("../controllers/contacts");

router.get("/", usersController.getContacts);
router.get("/:id", usersController.getContactById);

module.exports = router;
