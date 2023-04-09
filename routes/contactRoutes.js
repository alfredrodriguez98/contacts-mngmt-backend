const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

//Defining route for fetching all contacts
router.route("/").get(getContacts);

//Defining route for creating new contacts
router.route("/").post(createContact);

//Defining route for fetching individual contact
router.route("/:id").get(getContact);

//Defining route to UPDATE existing contact
router.route("/:id").put(updateContact);

//Defining route to DELETE existing contact
router.route("/:id").delete(deleteContact);

module.exports = router;
