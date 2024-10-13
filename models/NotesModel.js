const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

const NoteSchema = mongoose.Schema(
    {
        _id: {
            type: ObjectId,
            default: new mongoose.Types.ObjectId(),
        },
        noteTitle: String,
        noteDescription: String,
        priority: String,
        dateAdded: Date,
        dateUpdated: Date,
    },
    {
        Timestamp: true,
    }
);

const note = mongoose.model("NotesModel", NoteSchema);
module.exports = note;

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
