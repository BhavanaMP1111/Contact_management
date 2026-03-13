const express = require("express");
const router = express.Router();
const{
    getContacts,
     createContact, 
     getContact,
     updateContact, 
     deleteContact,
    } = require("../controllers/contactController") 

router.route("/").get(getContacts).post(createContact);

// router.route("/");

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.route("/:id")

// router.route("/:id")

module.exports = router;