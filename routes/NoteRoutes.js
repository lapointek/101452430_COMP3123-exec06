const noteModel = require("../models/NotesModel");
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post("/notes", (req, res) => {
    const data = req.body;
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to save the note
    noteModel.create(data);
    res.status(201).json({ message: "Note created Successfully" });
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get("/notes", (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    } else {
    }
    //TODO - Write your code here to returns all note
    const fetchNotes = noteModel.find();
    res.status(200).json(fetchNotes);
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get("/notes/:noteId", (req, res) => {
    const id = req.params.id;
    const fetchNote = noteModel.findById(id);
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    res.status(200).json(fetchNote);
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put("/notes/:noteId", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to update the note using noteid
    noteModel.findByIdAndUpdate(id, updatedData);
    res.status(200).json({ message: "Note details updated successfully." });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete("/notes/:noteId", (req, res) => {
    const id = req.params.id;
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to delete the note using noteid
    noteModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully." });
});
