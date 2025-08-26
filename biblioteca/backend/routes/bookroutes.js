const express = require('express');
const {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/bookcontrollers');
const { protect } = require('../middlewares/authmiddlewares');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);

router.post('/', protect, createBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);

module.exports = router;