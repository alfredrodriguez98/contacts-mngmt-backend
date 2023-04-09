//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = (req, res) => {
  res.status(200).json(contacts);
};

//@desc Create New contact
//@route POST /api/contacts
//@access private
//HTTP-201 -> Resource created
const createContact = (req, res) => {
  res.status(201).json({ message: "Create contact" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
