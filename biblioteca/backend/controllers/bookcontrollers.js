const book = require('../models/Book');



const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener libros', error: error.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({message: 'Libro no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el libro', error,message});
    }
};

const createBook = async (req,res) => {
    const { title, author, isbn, oublishedYear, stock } = req.body;

    if (!title || !author || !isbn || !stock) {
        return res.status(400).json({ message: 'por favor, completa todos los campos  requeridos.'});
    }

    try {
        const bookExist = await Book.findOne({isbn});
        if (bookExist) {
            return res.status(400).json({ message: 'ya existe un libro con este ISBN.'});
        }

        const book = new  Book({
            title,
            author,
            isbn,
            publishedYear,
            stock
        });

        const createdBook = await book.save();
        res.status(201).json (createdBook);
    } catch (error) {
        res.status (500).json({ message: 'Error al crear libro', error: error,message});
    }
};

const updateBook = async (req, res) => {
    const { title, author, isbn, publishedYear,stock } = req.body;

    try {
        const book = await Book.findById(req.params.id);

        if (book) {
            book.title = title || book.title;
            book.author = author || book.author;
            book.isbn = isbn || book.isbn;
            book.publishedYear = publishedYear || book.publishedYear;
            book.stock = stock !== underfined ? stock : book.stock;

            const updateBook = await book.save ();
            res.status (200).json(updateBook);
        } else {
            res.status(404).json ({ message: 'Libro no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar libro', error: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await book.findById(req.params.id);

        if (book) {
            await Book.deleteOne({_id: book._id });
            res.status(200).json({ message: 'libro eliminado'});
        } else {
            res.status(404).json({ message: 'libro no econtrado'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar libro', error: error,message});
    }
};

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
