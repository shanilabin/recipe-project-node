const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', authMiddleware, recipeController.addRecipe); 


router.put('/:id', authMiddleware, recipeController.updateRecipe); 


router.delete('/:id', authMiddleware, recipeController.deleteRecipe); 

module.exports = router;