const express = require("express");
const router = express.Router();
const ContactosController = require("../controllers/ContactosController");
const contactosController = new ContactosController();

router.post("/", contactosController.add);

module.exports = router;
