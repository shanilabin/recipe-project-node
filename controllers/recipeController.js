const Recipe = require('../models/Recipe');

exports.addRecipe = async (req, res, next) => {
    const recipe = await recipe.create(req.body);
    res.json(recipe)

};

exports.updateRecipe = async (req, res, next) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!updatedRecipe) return res.status(404).json({ message: "מתכון לא נמצא" });
        res.json({ message: "המתכון עודכן", recipe: updatedRecipe });
    } catch (err) {
        next(err);
    }
};


exports.deleteRecipe = async (req, res, next) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ message: "מתכון לא נמצא" });
        res.json({ message: "המתכון נמחק מהמסד" });
    } catch (err) {
        next(err);
    }
};

exports.getRecipe = async (req, res) =>{
    const recipe = await recipe.findOne(req.body);
    res.json(recipe)
}
