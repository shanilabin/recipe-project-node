const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    time: Number,
    ingredients: [String],
    category: String,
    isFavorite: { type: Boolean, default: false }
});

module.exports = mongoose.model('Recipe', RecipeSchema);