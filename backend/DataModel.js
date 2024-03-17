const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("DataModel", DataSchema);