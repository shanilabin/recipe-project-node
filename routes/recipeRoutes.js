const express = require('express');
const router = express.Router();
const {addRecipe, getRecipe, deleteRecipe, updateRecipe} = require('../controllers/recipeController')
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', authMiddleware, addRecipe); 

router.put('/:id', authMiddleware, updateRecipe); 

router.delete('/:id', authMiddleware, deleteRecipe); 

router.get('/', authMiddleware, getRecipe);

module.exports = router;