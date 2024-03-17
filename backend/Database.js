const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://swiftfit:swiftfit2024@swiftfit.mlx3xpb.mongodb.net/?retryWrites=true&w=majority&appName=SwiftFit')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(() => {
    console.log("Error connecting to MongoDB");
})