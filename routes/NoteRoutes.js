const noteModel = require("../models/NotesModel");
const express = require("express");
const router = express.Router();

const app = express();
app.use(express.json());
app.use(router);
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post("/notes", async (req, res) => {
    const data = req.body;
    console.log(req.body);
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to save the note
    await noteModel.create(data);
    res.status(201).json({ message: "Note created Successfully" });
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get("/notes", async (req, res) => {
    // Validate request
    //TODO - Write your code here to returns all note
    try {
        const fetchNotes = await noteModel.find();
        res.status(200).json(fetchNotes);
        console.log("Fetched all notes");
    } catch (error) {
        console.error("Error fetching note data");
        return res.status(400).json({ message: "Internal Server Error" });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get("/notes/:noteId", async (req, res) => {
    try {
        const id = req.params.noteId;
        const fetchNote = await noteModel.findById(id);
        console.log(req.body);
        if (fetchNote) {
            res.status(200).json(fetchNote);
        } else {
            return res.status(400).send({
                message: "Note content can not be empty",
            });
        }
    } catch (error) {
        console.error(error);
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put("/notes/:noteId", async (req, res) => {
    const id = req.params.noteId;
    const updatedData = req.body;
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to update the note using noteid
    await noteModel.findByIdAndUpdate(id, updatedData);
    res.status(200).json({ message: "Note details updated successfully." });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete("/notes/:noteId", async (req, res) => {
    const id = req.params.noteId;
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to delete the note using noteid
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully." });
});

module.exports = router;
