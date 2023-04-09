const express = require("express");
const router = express.Router();

//Defining route for fetching all contacts
router.route("/").get((req,res) => {
  res.status(200).json({message: "Get all contacts"});
})

//Defining route for fetching individual contact
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//Defining route for creating new contacts
router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create contact" });
});

//Defining route to UPDATE existing contact
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//Defining route to DELETE existing contact
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;